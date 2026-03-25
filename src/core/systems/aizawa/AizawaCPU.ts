import { GArtSystemCPU } from "particle-system";

export class AizawaCPU extends GArtSystemCPU {
  private a = 0.95;
  private b = 0.7;
  private c = 0.6;
  private d = 3.5;
  private e = 0.25;
  private f = 0.1;

  createParticle(): number[] {
    return [0.1, 1.0, 0.01, this.random(0.01, 0.08)];
  }

  update(dt: number) {
    const particles = this.getParticles();
    const particleCount = this.getParticleCount();
    const attributes = 4;

    for (let i = 0; i < particleCount; i++) {
      const offset = i * attributes;
      const x = particles[offset];
      const y = particles[offset + 1];
      const z = particles[offset + 2];
      const step = particles[offset + 3] * dt;

      const dx = (z - this.b) * x - this.d * y;
      const dy = this.d * x + (z - this.b) * y;
      const dz =
        this.c +
        this.a * z -
        (z * z * z) / 3 -
        (x * x + y * y) * (1 + this.e * z) +
        this.f * z * (x * x * x);

      particles[offset] = x + dx * step;
      particles[offset + 1] = y + dy * step;
      particles[offset + 2] = z + dz * step;
    }
  }
}

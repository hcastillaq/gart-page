import { GArtSystemCPU } from "particle-system";

export class ChenCPU extends GArtSystemCPU {
  private a = 40;
  private b = 3;
  private c = 28;

  createParticle(): number[] {
    return [1, 1, 1, this.random(0.001, 0.005)];
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

      const dx = this.a * (y - x);
      const dy = (this.c - this.a) * x - x * z + this.c * y;
      const dz = x * y - this.b * z;

      particles[offset] = x + dx * step;
      particles[offset + 1] = y + dy * step;
      particles[offset + 2] = z + dz * step;
    }
  }
}

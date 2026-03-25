import { GArtSystemCPU } from "particle-system";

export class DadrasCPU extends GArtSystemCPU {
  private a = 3;
  private b = 2.7;
  private c = 1.7;
  private d = 2;
  private e = 9;

  createParticle(): number[] {
    return [1.1, 2.1, -2.0, this.random(0.005, 0.03)];
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

      const dx = y - this.a * x + this.b * y * z;
      const dy = this.c * y - x * z + z;
      const dz = this.d * x * y - this.e * z;

      particles[offset] = x + dx * step;
      particles[offset + 1] = y + dy * step;
      particles[offset + 2] = z + dz * step;
    }
  }
}

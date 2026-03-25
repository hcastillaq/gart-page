import { GArtSystemCPU } from "particle-system";

export class ThomasCPU extends GArtSystemCPU {
  private b = 0.19;

  createParticle(): number[] {
    return [0.1, 0.2, 0.3, this.random(0.01, 0.2)];
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

      const dx = Math.sin(y) - this.b * x;
      const dy = Math.sin(z) - this.b * y;
      const dz = Math.sin(x) - this.b * z;

      particles[offset] = x + dx * step;
      particles[offset + 1] = y + dy * step;
      particles[offset + 2] = z + dz * step;
    }
  }
}

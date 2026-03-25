import { GArtSystemGPU } from "particle-system";

export class ThomasGPU extends GArtSystemGPU {
  texturePosition = /* glsl */ `
		uniform float uSpeed;

		void main() {
			vec2 uv = gl_FragCoord.xy / resolution.xy;
			vec4 pos = texture2D(texturePosition, uv);

			float b  = 0.19;
			float dt = pos.w * uSpeed;

			float dx = (sin(pos.y) - b * pos.x) * dt;
			float dy = (sin(pos.z) - b * pos.y) * dt;
			float dz = (sin(pos.x) - b * pos.z) * dt;

			gl_FragColor = vec4(pos.x + dx, pos.y + dy, pos.z + dz, pos.w);
		}
	`;

  protected getInitialData(): Float32Array {
    const particleCount = this.getParticleCount();
    const data = new Float32Array(particleCount * 4);
    for (let i = 0; i < particleCount; i++) {
      data[i * 4] = 0.1;
      data[i * 4 + 1] = 0.2;
      data[i * 4 + 2] = 0.3;
      data[i * 4 + 3] = this.random(0.01, 0.2);
    }
    return data;
  }
}

export default ThomasGPU;

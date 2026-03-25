import { GArtSystemGPU } from "particle-system";

export class AizawaGPU extends GArtSystemGPU {
  texturePosition = /* glsl */ `
		uniform float uSpeed;

		void main() {
			vec2 uv = gl_FragCoord.xy / resolution.xy;
			vec4 pos = texture2D(texturePosition, uv);

			float a  = 0.95;
			float b  = 0.7;
			float c  = 0.6;
			float d  = 3.5;
			float e  = 0.25;
			float f  = 0.1;
			float dt = pos.w * uSpeed;

			float dx = ((pos.z - b) * pos.x - d * pos.y) * dt;
			float dy = (d * pos.x + (pos.z - b) * pos.y) * dt;
			float dz = (c + a * pos.z - (pos.z * pos.z * pos.z) / 3.0 - (pos.x * pos.x + pos.y * pos.y) * (1.0 + e * pos.z) + f * pos.z * (pos.x * pos.x * pos.x)) * dt;

			gl_FragColor = vec4(pos.x + dx, pos.y + dy, pos.z + dz, pos.w);
		}
	`;

  protected getInitialData(): Float32Array {
    const particleCount = this.getParticleCount();
    const data = new Float32Array(particleCount * 4);
    for (let i = 0; i < particleCount; i++) {
      data[i * 4] = 0.1;
      data[i * 4 + 1] = 1.0;
      data[i * 4 + 2] = 0.01;
      data[i * 4 + 3] = this.random(0.01, 0.08);
    }
    return data;
  }
}

export default AizawaGPU;

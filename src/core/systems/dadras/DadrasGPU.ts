import { GArtSystemGPU } from "particle-system";

export class DadrasGPU extends GArtSystemGPU {
  texturePosition = /* glsl */ `
		uniform float uSpeed;

		void main() {
			vec2 uv = gl_FragCoord.xy / resolution.xy;
			vec4 pos = texture2D(texturePosition, uv);

			float a  = 3.0;
			float b  = 2.7;
			float c  = 1.7;
			float d  = 2.0;
			float e  = 9.0;
			float dt = pos.w * uSpeed;

			float dx = (pos.y - a * pos.x + b * pos.y * pos.z) * dt;
			float dy = (c * pos.y - pos.x * pos.z + pos.z) * dt;
			float dz = (d * pos.x * pos.y - e * pos.z) * dt;

			gl_FragColor = vec4(pos.x + dx, pos.y + dy, pos.z + dz, pos.w);
		}
	`;

  protected getInitialData(): Float32Array {
    const particleCount = this.getParticleCount();
    const data = new Float32Array(particleCount * 4);
    for (let i = 0; i < particleCount; i++) {
      data[i * 4] = 1.1;
      data[i * 4 + 1] = 2.1;
      data[i * 4 + 2] = -2.0;
      data[i * 4 + 3] = this.random(0.005, 0.03);
    }
    return data;
  }
}

export default DadrasGPU;

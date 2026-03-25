import { GArtSystemGPU } from "particle-system";

export class ChenGPU extends GArtSystemGPU {
  texturePosition = /* glsl */ `
		uniform float uSpeed;

		void main() {
			vec2 uv = gl_FragCoord.xy / resolution.xy;
			vec4 pos = texture2D(texturePosition, uv);

			float a  = 40.0;
			float b  = 3.0;
			float c  = 28.0;
			float dt = pos.w * uSpeed;

			float dx = a * (pos.y - pos.x) * dt;
			float dy = ((c - a) * pos.x - pos.x * pos.z + c * pos.y) * dt;
			float dz = (pos.x * pos.y - b * pos.z) * dt;

			gl_FragColor = vec4(pos.x + dx, pos.y + dy, pos.z + dz, pos.w);
		}
	`;

  protected getInitialData(): Float32Array {
    const particleCount = this.getParticleCount();
    const data = new Float32Array(particleCount * 4);
    for (let i = 0; i < particleCount; i++) {
      data[i * 4] = 1;
      data[i * 4 + 1] = 1;
      data[i * 4 + 2] = 1;
      data[i * 4 + 3] = Math.random() * 0.004 + 0.001;
    }
    return data;
  }
}

export default ChenGPU;

import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter(),
			prerender: {
				enabled: true
			}
	}
};

export default config;

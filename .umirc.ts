import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {

  },
  routes: [
    { path: '/', component: '@/pages/index', exact: false }, // exact 为 true => 严格匹配
    {component: '@/pages/404' }
  ],
  // hash
});

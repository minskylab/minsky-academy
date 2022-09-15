/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  react: true,
  scalarTypes: { DateTime: 'string' },
  introspection: {
    endpoint: 'https://self.internal.minsky.cc/graphql',
    headers: {},
  },
  destination: './apps/academy/gqty/index.ts',
  subscriptions: false,
  javascriptOutput: false,
};

module.exports = config;

export async function load({ url }) {

  const { pathname } = url;

  return { props: { pathname } };
}

// SPA-like app at least for now.
export const ssr = false;
export const csr = true;
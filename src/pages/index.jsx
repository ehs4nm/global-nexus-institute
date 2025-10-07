// Re-export the loading page component as the default homepage
import IndexPage, { Head as LoadingHead } from './loading.js';

export default IndexPage;
export const Head = LoadingHead;

declare global {
  interface Window {
    TEST_CONFIG: {
      SUBMIT_URL: string;
      COMPARE_URL: string;
      TEST_ID_URL: string;
      WP_NONCE: string;
    };
  }
}

export {};
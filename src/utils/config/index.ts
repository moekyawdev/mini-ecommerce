interface Config {
  apiBAseUrl: string;
}

export const config: Config = {
  apiBAseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "",
};

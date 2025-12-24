export async function safeProviderRequest<T>(
  provider: any,
  args: { method: string; params?: any[] }
): Promise<T> {
  try {
    return (await provider.request(args)) as T;
  } catch (error: any) {
    const message =
      error?.message || "Unknown provider request error";
    throw new Error(`Provider request failed: ${message}`);
  }
}

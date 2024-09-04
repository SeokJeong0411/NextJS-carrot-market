export function formatToWon(price: number): string {
  return price.toLocaleString("ko-KR");
}

export function formatToTimeAgo(date: string): string {
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diff = Math.ceil((time - now) / (1000 * 60 * 60 * 24));

  const formatter = new Intl.RelativeTimeFormat("ko");

  return formatter.format(diff, "days");
}

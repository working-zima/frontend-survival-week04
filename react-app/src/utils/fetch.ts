type getProps = {
  host: string;
  path: string;
};

export async function get({ host, path }: getProps) {
  const url = `http://${host}/${path}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function post() {
  return null;
}

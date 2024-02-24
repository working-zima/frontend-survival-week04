import Food from '../types/Food';

type fetchProps = {
  host: string;
  path: string;
  body?: { menu: Food[]; totalPrice: number };
};

export async function get({ host, path }: fetchProps) {
  const res = await fetch(`http://${host}/${path}`);
  return res.json();
}

export async function post({ host, path, body }: fetchProps) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(`http://${host}/${path}`, options);
  return res.json();
}

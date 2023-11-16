// deno-lint-ignore-file no-var no-inner-declarations no-redeclare

export async function getEntityData(row: {
  mortgageCenter: string;
}): Promise<object> {
  console.error();
  const entityId = 'M-' + row.mortgageCenter;
  const apiKey = '5e066fa169f80a3cf5d4058fb618c625'; //row.apiKey

  const res = await fetch(
    `https://sbx-api.yextapis.com/v2/accounts/me/entities/${entityId}?api_key=${apiKey}&v=20230606`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const resJson: any = await res.json();

  const address1 = resJson.response?.address?.line1?.toString();
  const address2 = resJson.response?.address?.line2?.toString();
  const city = resJson.response?.address?.city?.toString();
  const state = resJson.response?.address?.region?.toString();
  const zip = resJson.response?.address?.postalCode?.toString();

  return {
    address1: address1,
    address2: address2,
    city: city,
    state: state,
    zip: zip,
  };
}

// deno-lint-ignore-file no-var no-inner-declarations no-redeclare

declare const API_KEY: string;
declare const YEXT_HOST: string;

export async function lookupAddress(row: {
  mortgageCenter: string;
}): Promise<object> {
  console.error();
  const entityId = 'M-' + row.mortgageCenter;
  //const apiKey = '5e066fa169f80a3cf5d4058fb618c625'; //row.apiKey

  const res = await fetch(
    `${YEXT_HOST}${entityId}?api_key=${API_KEY}&v=20230606`,
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

export function getDate(): string {
  const dateObj = new Date();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  const year = dateObj.getFullYear();
  return `${year}-${month}-${day}`;
}

export function checkDateDifference(row: {
  dateString: string;
  daysDifference: string;
}): object {
  const inputDate = new Date(row.dateString);
  const unlicenseDate = new Date();
  unlicenseDate.setDate(unlicenseDate.getDate() - Number(row.daysDifference));
  const isDateOlder = inputDate < unlicenseDate;
  return { licensed: isDateOlder ? 'false' : 'true' };
}

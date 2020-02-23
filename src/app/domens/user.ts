import { Way } from 'src/app/domens/way';
export class User {
  constructor(
    public avatar: string,
    public name: string,
    public address: string,
    public e_mail: string,
    public phone_number: number,
    public twitter: string,
    public facebook: string,
    public login: string,
    public password: string,
    public ways: Array<Way>,
    public favPlaces: Array<string>
    //places_id
  ) {}
}

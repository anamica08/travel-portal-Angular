import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  citySelected: string;
  countrySelected: String;
  emailRegx = '^[a-zA-Z0-9._%+-]+@nagarro.com$';

  constructor(
    private fb: FormBuilder,

    public router: Router
  ) {}

  ngOnInit() {
    if (history.state.state) {
      this.populateForm();
    }
  }

  //form builder
  regiForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    businessUnit: ['', Validators.required],
    title: ['', Validators.required],
    email: ['', [Validators.required  ,Validators.pattern(this.emailRegx)]],
    phone: [
      '',
      [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^(0|[1-9][0-9]*)$'),
      ],
    ],
    address1: ['', Validators.required],
    address2: [''],
    city: ['', Validators.required],
    zip: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
    state: ['', Validators.required],
    country: ['', Validators.required],
  });

  populateForm() {
    let data = history.state.state;
    this.regiForm.setValue({
      firstName: data.firstName,
      lastName: data.lastName,
      businessUnit: data.businessUnit,
      title: data.title,
      email: data.email,
      phone: data.phone,
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      zip: data.zip,
      state: data.state,
      country: data.country,
    });
  }

  onFormSubmit() {
    this.router.navigateByUrl('/confirm', { state: this.regiForm.value });
  }



  states = [
    { state: 'Copperbelt' },
    { state: 'Eastern' },
    { state: 'Luapula' },
    { state: 'Lusaka' },
    { state: 'Northern' },
    { state: 'North-Western' },
    { state: 'Southern' },
    { state: 'Western' },
    { state: 'Bulawayo' },
    { state: 'Harare' },
    { state: 'Manicaland' },
    { state: 'Mashonaland Central' },
    { state: 'Mashonaland East' },
    { state: 'Mashonaland West' },
    { state: 'Masvingo' },
    { state: 'Matabeleland North' },
    { state: 'Matabeleland South' },
    { state: 'Midlands' },
    { state: 'Western Cape' },
    { state: 'Andalucia' },
    { state: 'Aragon' },
    { state: 'Asturias' },
    { state: 'Baleares' },
    { state: 'Ceuta' },
    { state: 'Canarias' },
    { state: 'Cantabria' },
    { state: 'Castilla-La Mancha' },
    { state: 'Castilla y Leon' },
    { state: 'Cataluna' },
    { state: 'Comunidad Valenciana' },
    { state: 'Primorskiy' },
    { state: "Stavropol'" },
    { state: 'Moscow' },
    { state: 'St. Petersburg' },
    { state: 'Yevrey' },
    { state: 'Butare' },
    { state: 'Byumba' },
    { state: 'Cyangugu' },
    { state: 'Gikongoro' },
    { state: 'Gisenyi' },
    { state: 'Gitarama' },
    { state: 'Kibungo' },
    { state: 'Kibuye' },
    { state: 'Kigali Rurale' },
    { state: 'Kigali-ville' },
    { state: 'Umutara' },
    { state: 'Ruhengeri' },
    { state: "A'ana" },
    { state: 'Aiga-i-le-Tai' },
    { state: 'Atua' },
    { state: "Fa'asaleleaga" },
    { state: "Gaga'emauga" },
    { state: 'Gagaifomauga' },
    { state: 'Palauli' },
    { state: "Satupa'itea" },
    { state: 'Tuamasaga' },
    { state: "Va'a-o-Fonoti" },
    { state: 'Vaisigano' },
    { state: 'Acquaviva' },
    { state: 'Borgo Maggiore' },
    { state: 'Chiesanuova' },
    { state: 'Domagnano' },
    { state: 'Faetano' },
    { state: 'Fiorentino' },
    { state: 'Montegiardino' },
    { state: 'San Marino Citta' },
    { state: 'Serravalle' },
    { state: 'Al Bahah' },
    { state: 'Al Hudud ash Shamaliyah' },
    { state: 'Al Jawf' },
    { state: 'Al Madinah' },
    { state: 'Al Qasim' },
    { state: 'Ar Riyad' },
    { state: 'Ash Sharqiyah' },
    { state: "'Asir" },
    { state: "Ha'il" },
    { state: 'Jizan' },
    { state: 'Makkah' },
    { state: 'Najran' },
    { state: 'Tabuk' },
    { state: 'Dakar' },
    { state: 'Diourbel' },
    { state: 'Fatick' },
    { state: 'Kaolack' },
    { state: 'Kolda' },
    { state: 'Louga' },
    { state: 'Matam' },
    { state: 'Saint-Louis' },
    { state: 'Tambacounda' },
    { state: 'Thies' },
    { state: 'Ziguinchor' },
    { state: 'Kosovo' },
    { state: 'Montenegro' },
    { state: 'Serbia' },
    { state: 'Vojvodina' },
    { state: 'Anse aux Pins' },
    { state: 'Anse Boileau' },
    { state: 'Anse Etoile' },
    { state: 'Anse Louis' },
    { state: 'Anse Royale' },
    { state: 'Baie Lazare' },
    { state: 'Baie Sainte Anne' },
    { state: 'Beau Vallon' },
    { state: 'Bel Air' },
    { state: 'Bel Ombre' },
    { state: 'Cascade' },
    { state: 'Glacis' },
    { state: "Grand' Anse" },
    { state: "Grand' Anse" },
    { state: 'La Digue' },
    { state: 'La Riviere Anglaise' },
    { state: 'Mont Buxton' },
    { state: 'Mont Fleuri' },
    { state: 'Plaisance' },
    { state: 'Pointe La Rue' },
    { state: 'Port Glaud' },
    { state: 'Saint Louis' },
    { state: 'Takamaka' },
    { state: 'Banskobystricky' },
    { state: 'Bratislavsky' },
    { state: 'Kosicky' },
    { state: 'Nitriansky' },
    { state: 'Presovsky' },
    { state: 'Trenciansky' },
    { state: 'Trnavsky' },
    { state: 'Zilinsky' },
    { state: 'Ajdovscina' },
    { state: 'Beltinci' },
    { state: 'Benedikt' },
    { state: 'Bistrica ob Sotli' },
    { state: 'Bled' },
    { state: 'Bloke' },
    { state: 'Bohinj' },
    { state: 'Borovnica' },
    { state: 'Bovec' },
    { state: 'Braslovce' },
    { state: 'Brda' },
    { state: 'Brezice' },
    { state: 'Brezovica' },
    { state: 'Cankova' },
    { state: 'Celje' },
    { state: 'Cerklje na Gorenjskem' },
    { state: 'Cerknica' },
    { state: 'Cerkno' },
    { state: 'Cerkvenjak' },
    { state: 'Crensovci' },
    { state: 'Crna na Koroskem' },
  ];

  countries = [
    { country: 'Afghanistan' },
    { country: 'Albania' },
    { country: 'Algeria' },
    { country: 'Andorra' },
    { country: 'Angola' },
    { country: 'Antarctica' },
    { country: 'Antigua and Barbuda' },
    { country: 'Argentina' },
    { country: 'Armenia' },
    { country: 'Australia' },
    { country: 'Austria' },
    { country: 'Azerbaijan' },
    { country: 'Bahamas' },
    { country: 'Bahrain' },
    { country: 'Bangladesh' },
    { country: 'Barbados' },
    { country: 'Belarus' },
    { country: 'Belgium' },
    { country: 'Belize' },
    { country: 'Benin' },
    { country: 'Bermuda' },
    { country: 'Bhutan' },
    { country: 'Bolivia' },
    { country: 'Bosnia and Herzegovina' },
    { country: 'Botswana' },
    { country: 'Brazil' },
    { country: 'Brunei' },
    { country: 'Bulgaria' },
    { country: 'Burkina Faso' },
    { country: 'Burma' },
    { country: 'Burundi' },
    { country: 'Cambodia' },
    { country: 'Cameroon' },
    { country: 'Canada' },
    { country: 'Cape Verde' },
    { country: 'Central African Republic' },
    { country: 'Chad' },
    { country: 'Chile' },
    { country: 'China' },
    { country: 'Colombia' },
    { country: 'Comoros' },
    { country: 'Congo, Democratic Republic' },
    { country: 'Congo, Republic of the' },
    { country: 'Costa Rica' },
    { country: "Cote d'Ivoire" },
    { country: 'Croatia' },
    { country: 'Cuba' },
    { country: 'Cyprus' },
    { country: 'Czech Republic' },
    { country: 'Denmark' },
    { country: 'Djibouti' },
    { country: 'Dominica' },
    { country: 'Dominican Republic' },
    { country: 'East Timor' },
    { country: 'Ecuador' },
    { country: 'Egypt' },
    { country: 'El Salvador' },
    { country: 'Equatorial Guinea' },
    { country: 'Eritrea' },
    { country: 'Estonia' },
    { country: 'Ethiopia' },
    { country: 'Fiji' },
    { country: 'Finland' },
    { country: 'France' },
    { country: 'Gabon' },
    { country: 'Gambia' },
    { country: 'Georgia' },
    { country: 'Germany' },
    { country: 'Ghana' },
    { country: 'Greece' },
    { country: 'Greenland' },
    { country: 'Grenada' },
    { country: 'Guatemala' },
    { country: 'Guinea' },
    { country: 'Guinea-Bissau' },
    { country: 'Guyana' },
    { country: 'Haiti' },
    { country: 'Honduras' },
    { country: 'Hong Kong' },
    { country: 'Hungary' },
    { country: 'Iceland' },
    { country: 'India' },
    { country: 'Indonesia' },
    { country: 'Iran' },
    { country: 'Iraq' },
    { country: 'Ireland' },
    { country: 'Israel' },
    { country: 'Italy' },
    { country: 'Jamaica' },
    { country: 'Japan' },
    { country: 'Jordan' },
    { country: 'Kazakhstan' },
    { country: 'Kenya' },
    { country: 'Kiribati' },
    { country: 'Korea North' },
    { country: 'Korea South' },
    { country: 'Kuwait' },
    { country: 'Kyrgyzstan' },
    { country: 'Laos' },
    { country: 'Latvia' },
    { country: 'Lebanon' },
    { country: 'Lesotho' },
    { country: 'Liberia' },
    { country: 'Libya' },
    { country: 'Liechtenstein' },
    { country: 'Lithuania' },
    { country: 'Luxembourg' },
    { country: 'Macedonia' },
    { country: 'Madagascar' },
    { country: 'Malawi' },
    { country: 'Malaysia' },
    { country: 'Maldives' },
    { country: 'Mali' },
    { country: 'Malta' },
    { country: 'Marshall Islands' },
    { country: 'Mauritania' },
    { country: 'Mauritius' },
    { country: 'Mexico' },
    { country: 'Micronesia' },
    { country: 'Moldova' },
    { country: 'Mongolia' },
    { country: 'Morocco' },
    { country: 'Monaco' },
    { country: 'Mozambique' },
    { country: 'Namibia' },
    { country: 'Nauru' },
    { country: 'Nepal' },
    { country: 'Netherlands' },
    { country: 'New Zealand' },
    { country: 'Nicaragua' },
    { country: 'Niger' },
    { country: 'Nigeria' },
    { country: 'Norway' },
    { country: 'Oman' },
    { country: 'Pakistan' },
    { country: 'Panama' },
    { country: 'Papua New Guinea' },
    { country: 'Paraguay' },
    { country: 'Peru' },
    { country: 'Philippines' },
    { country: 'Poland' },
    { country: 'Portugal' },
    { country: 'Qatar' },
    { country: 'Romania' },
    { country: 'Russia' },
    { country: 'Rwanda' },
    { country: 'Samoa' },
    { country: 'San Marino' },
    { country: 'Sao Tome' },
    { country: 'Saudi Arabia' },
    { country: 'Senegal' },
    { country: 'Serbia and Montenegro' },
    { country: 'Seychelles' },
    { country: 'Sierra Leone' },
    { country: 'Singapore' },
    { country: 'Slovakia' },
    { country: 'Slovenia' },
    { country: 'Solomon Islands' },
    { country: 'Somalia' },
    { country: 'South Africa' },
    { country: 'Spain' },
    { country: 'Sri Lanka' },
    { country: 'Sudan' },
    { country: 'Suriname' },
    { country: 'Swaziland' },
    { country: 'Sweden' },
    { country: 'Switzerland' },
    { country: 'Syria' },
    { country: 'Taiwan' },
    { country: 'Tajikistan' },
    { country: 'Tanzania' },
    { country: 'Thailand' },
    { country: 'Togo' },
    { country: 'Tonga' },
    { country: 'Trinidad and Tobago' },
    { country: 'Tunisia' },
    { country: 'Turkey' },
    { country: 'Turkmenistan' },
    { country: 'Uganda' },
    { country: 'Ukraine' },
    { country: 'United Arab Emirates' },
    { country: 'United Kingdom' },
    { country: 'United States' },
    { country: 'Uruguay' },
    { country: 'Uzbekistan' },
    { country: 'Vanuatu' },
    { country: 'Venezuela' },
    { country: 'Vietnam' },
    { country: 'Yemen' },
    { country: 'Zambia' },
    { country: 'Zimbabwe' },
  ];

  
}

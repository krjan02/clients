type SelectableCountry = Readonly<{
  name: string;
  value: string;
  disabled: boolean;
}>;

export const selectableCountries: ReadonlyArray<SelectableCountry> = [
  { name: "-- Select --", value: "", disabled: false },
  { name: "United States", value: "US", disabled: false },
  { name: "China", value: "CN", disabled: false },
  { name: "France", value: "FR", disabled: false },
  { name: "Germany", value: "DE", disabled: false },
  { name: "Canada", value: "CA", disabled: false },
  { name: "United Kingdom", value: "GB", disabled: false },
  { name: "Australia", value: "AU", disabled: false },
  { name: "India", value: "IN", disabled: false },
  { name: "", value: "-", disabled: true },
  { name: "Afghanistan", value: "AF", disabled: false },
  { name: "Åland Islands", value: "AX", disabled: false },
  { name: "Albania", value: "AL", disabled: false },
  { name: "Algeria", value: "DZ", disabled: false },
  { name: "American Samoa", value: "AS", disabled: false },
  { name: "Andorra", value: "AD", disabled: false },
  { name: "Angola", value: "AO", disabled: false },
  { name: "Anguilla", value: "AI", disabled: false },
  { name: "Antarctica", value: "AQ", disabled: false },
  { name: "Antigua and Barbuda", value: "AG", disabled: false },
  { name: "Argentina", value: "AR", disabled: false },
  { name: "Armenia", value: "AM", disabled: false },
  { name: "Aruba", value: "AW", disabled: false },
  { name: "Austria", value: "AT", disabled: false },
  { name: "Azerbaijan", value: "AZ", disabled: false },
  { name: "Bahamas", value: "BS", disabled: false },
  { name: "Bahrain", value: "BH", disabled: false },
  { name: "Bangladesh", value: "BD", disabled: false },
  { name: "Barbados", value: "BB", disabled: false },
  { name: "Belarus", value: "BY", disabled: false },
  { name: "Belgium", value: "BE", disabled: false },
  { name: "Belize", value: "BZ", disabled: false },
  { name: "Benin", value: "BJ", disabled: false },
  { name: "Bermuda", value: "BM", disabled: false },
  { name: "Bhutan", value: "BT", disabled: false },
  { name: "Bolivia, Plurinational State of", value: "BO", disabled: false },
  { name: "Bonaire, Sint Eustatius and Saba", value: "BQ", disabled: false },
  { name: "Bosnia and Herzegovina", value: "BA", disabled: false },
  { name: "Botswana", value: "BW", disabled: false },
  { name: "Bouvet Island", value: "BV", disabled: false },
  { name: "Brazil", value: "BR", disabled: false },
  { name: "British Indian Ocean Territory", value: "IO", disabled: false },
  { name: "Brunei Darussalam", value: "BN", disabled: false },
  { name: "Bulgaria", value: "BG", disabled: false },
  { name: "Burkina Faso", value: "BF", disabled: false },
  { name: "Burundi", value: "BI", disabled: false },
  { name: "Cambodia", value: "KH", disabled: false },
  { name: "Cameroon", value: "CM", disabled: false },
  { name: "Cape Verde", value: "CV", disabled: false },
  { name: "Cayman Islands", value: "KY", disabled: false },
  { name: "Central African Republic", value: "CF", disabled: false },
  { name: "Chad", value: "TD", disabled: false },
  { name: "Chile", value: "CL", disabled: false },
  { name: "Christmas Island", value: "CX", disabled: false },
  { name: "Cocos (Keeling) Islands", value: "CC", disabled: false },
  { name: "Colombia", value: "CO", disabled: false },
  { name: "Comoros", value: "KM", disabled: false },
  { name: "Congo", value: "CG", disabled: false },
  { name: "Congo, the Democratic Republic of the", value: "CD", disabled: false },
  { name: "Cook Islands", value: "CK", disabled: false },
  { name: "Costa Rica", value: "CR", disabled: false },
  { name: "Côte d'Ivoire", value: "CI", disabled: false },
  { name: "Croatia", value: "HR", disabled: false },
  { name: "Cuba", value: "CU", disabled: false },
  { name: "Curaçao", value: "CW", disabled: false },
  { name: "Cyprus", value: "CY", disabled: false },
  { name: "Czech Republic", value: "CZ", disabled: false },
  { name: "Denmark", value: "DK", disabled: false },
  { name: "Djibouti", value: "DJ", disabled: false },
  { name: "Dominica", value: "DM", disabled: false },
  { name: "Dominican Republic", value: "DO", disabled: false },
  { name: "Ecuador", value: "EC", disabled: false },
  { name: "Egypt", value: "EG", disabled: false },
  { name: "El Salvador", value: "SV", disabled: false },
  { name: "Equatorial Guinea", value: "GQ", disabled: false },
  { name: "Eritrea", value: "ER", disabled: false },
  { name: "Estonia", value: "EE", disabled: false },
  { name: "Ethiopia", value: "ET", disabled: false },
  { name: "Falkland Islands (Malvinas)", value: "FK", disabled: false },
  { name: "Faroe Islands", value: "FO", disabled: false },
  { name: "Fiji", value: "FJ", disabled: false },
  { name: "Finland", value: "FI", disabled: false },
  { name: "French Guiana", value: "GF", disabled: false },
  { name: "French Polynesia", value: "PF", disabled: false },
  { name: "French Southern Territories", value: "TF", disabled: false },
  { name: "Gabon", value: "GA", disabled: false },
  { name: "Gambia", value: "GM", disabled: false },
  { name: "Georgia", value: "GE", disabled: false },
  { name: "Ghana", value: "GH", disabled: false },
  { name: "Gibraltar", value: "GI", disabled: false },
  { name: "Greece", value: "GR", disabled: false },
  { name: "Greenland", value: "GL", disabled: false },
  { name: "Grenada", value: "GD", disabled: false },
  { name: "Guadeloupe", value: "GP", disabled: false },
  { name: "Guam", value: "GU", disabled: false },
  { name: "Guatemala", value: "GT", disabled: false },
  { name: "Guernsey", value: "GG", disabled: false },
  { name: "Guinea", value: "GN", disabled: false },
  { name: "Guinea-Bissau", value: "GW", disabled: false },
  { name: "Guyana", value: "GY", disabled: false },
  { name: "Haiti", value: "HT", disabled: false },
  { name: "Heard Island and McDonald Islands", value: "HM", disabled: false },
  { name: "Holy See (Vatican City State)", value: "VA", disabled: false },
  { name: "Honduras", value: "HN", disabled: false },
  { name: "Hong Kong", value: "HK", disabled: false },
  { name: "Hungary", value: "HU", disabled: false },
  { name: "Iceland", value: "IS", disabled: false },
  { name: "Indonesia", value: "ID", disabled: false },
  { name: "Iran, Islamic Republic of", value: "IR", disabled: false },
  { name: "Iraq", value: "IQ", disabled: false },
  { name: "Ireland", value: "IE", disabled: false },
  { name: "Isle of Man", value: "IM", disabled: false },
  { name: "Israel", value: "IL", disabled: false },
  { name: "Italy", value: "IT", disabled: false },
  { name: "Jamaica", value: "JM", disabled: false },
  { name: "Japan", value: "JP", disabled: false },
  { name: "Jersey", value: "JE", disabled: false },
  { name: "Jordan", value: "JO", disabled: false },
  { name: "Kazakhstan", value: "KZ", disabled: false },
  { name: "Kenya", value: "KE", disabled: false },
  { name: "Kiribati", value: "KI", disabled: false },
  { name: "Korea, Democratic People's Republic of", value: "KP", disabled: false },
  { name: "Korea, Republic of", value: "KR", disabled: false },
  { name: "Kuwait", value: "KW", disabled: false },
  { name: "Kyrgyzstan", value: "KG", disabled: false },
  { name: "Lao People's Democratic Republic", value: "LA", disabled: false },
  { name: "Latvia", value: "LV", disabled: false },
  { name: "Lebanon", value: "LB", disabled: false },
  { name: "Lesotho", value: "LS", disabled: false },
  { name: "Liberia", value: "LR", disabled: false },
  { name: "Libya", value: "LY", disabled: false },
  { name: "Liechtenstein", value: "LI", disabled: false },
  { name: "Lithuania", value: "LT", disabled: false },
  { name: "Luxembourg", value: "LU", disabled: false },
  { name: "Macao", value: "MO", disabled: false },
  { name: "Macedonia, the former Yugoslav Republic of", value: "MK", disabled: false },
  { name: "Madagascar", value: "MG", disabled: false },
  { name: "Malawi", value: "MW", disabled: false },
  { name: "Malaysia", value: "MY", disabled: false },
  { name: "Maldives", value: "MV", disabled: false },
  { name: "Mali", value: "ML", disabled: false },
  { name: "Malta", value: "MT", disabled: false },
  { name: "Marshall Islands", value: "MH", disabled: false },
  { name: "Martinique", value: "MQ", disabled: false },
  { name: "Mauritania", value: "MR", disabled: false },
  { name: "Mauritius", value: "MU", disabled: false },
  { name: "Mayotte", value: "YT", disabled: false },
  { name: "Mexico", value: "MX", disabled: false },
  { name: "Micronesia, Federated States of", value: "FM", disabled: false },
  { name: "Moldova, Republic of", value: "MD", disabled: false },
  { name: "Monaco", value: "MC", disabled: false },
  { name: "Mongolia", value: "MN", disabled: false },
  { name: "Montenegro", value: "ME", disabled: false },
  { name: "Montserrat", value: "MS", disabled: false },
  { name: "Morocco", value: "MA", disabled: false },
  { name: "Mozambique", value: "MZ", disabled: false },
  { name: "Myanmar", value: "MM", disabled: false },
  { name: "Namibia", value: "NA", disabled: false },
  { name: "Nauru", value: "NR", disabled: false },
  { name: "Nepal", value: "NP", disabled: false },
  { name: "Netherlands", value: "NL", disabled: false },
  { name: "New Caledonia", value: "NC", disabled: false },
  { name: "New Zealand", value: "NZ", disabled: false },
  { name: "Nicaragua", value: "NI", disabled: false },
  { name: "Niger", value: "NE", disabled: false },
  { name: "Nigeria", value: "NG", disabled: false },
  { name: "Niue", value: "NU", disabled: false },
  { name: "Norfolk Island", value: "NF", disabled: false },
  { name: "Northern Mariana Islands", value: "MP", disabled: false },
  { name: "Norway", value: "NO", disabled: false },
  { name: "Oman", value: "OM", disabled: false },
  { name: "Pakistan", value: "PK", disabled: false },
  { name: "Palau", value: "PW", disabled: false },
  { name: "Palestinian Territory, Occupied", value: "PS", disabled: false },
  { name: "Panama", value: "PA", disabled: false },
  { name: "Papua New Guinea", value: "PG", disabled: false },
  { name: "Paraguay", value: "PY", disabled: false },
  { name: "Peru", value: "PE", disabled: false },
  { name: "Philippines", value: "PH", disabled: false },
  { name: "Pitcairn", value: "PN", disabled: false },
  { name: "Poland", value: "PL", disabled: false },
  { name: "Portugal", value: "PT", disabled: false },
  { name: "Puerto Rico", value: "PR", disabled: false },
  { name: "Qatar", value: "QA", disabled: false },
  { name: "Réunion", value: "RE", disabled: false },
  { name: "Romania", value: "RO", disabled: false },
  { name: "Russian Federation", value: "RU", disabled: false },
  { name: "Rwanda", value: "RW", disabled: false },
  { name: "Saint Barthélemy", value: "BL", disabled: false },
  { name: "Saint Helena, Ascension and Tristan da Cunha", value: "SH", disabled: false },
  { name: "Saint Kitts and Nevis", value: "KN", disabled: false },
  { name: "Saint Lucia", value: "LC", disabled: false },
  { name: "Saint Martin (French part)", value: "MF", disabled: false },
  { name: "Saint Pierre and Miquelon", value: "PM", disabled: false },
  { name: "Saint Vincent and the Grenadines", value: "VC", disabled: false },
  { name: "Samoa", value: "WS", disabled: false },
  { name: "San Marino", value: "SM", disabled: false },
  { name: "Sao Tome and Principe", value: "ST", disabled: false },
  { name: "Saudi Arabia", value: "SA", disabled: false },
  { name: "Senegal", value: "SN", disabled: false },
  { name: "Serbia", value: "RS", disabled: false },
  { name: "Seychelles", value: "SC", disabled: false },
  { name: "Sierra Leone", value: "SL", disabled: false },
  { name: "Singapore", value: "SG", disabled: false },
  { name: "Sint Maarten (Dutch part)", value: "SX", disabled: false },
  { name: "Slovakia", value: "SK", disabled: false },
  { name: "Slovenia", value: "SI", disabled: false },
  { name: "Solomon Islands", value: "SB", disabled: false },
  { name: "Somalia", value: "SO", disabled: false },
  { name: "South Africa", value: "ZA", disabled: false },
  { name: "South Georgia and the South Sandwich Islands", value: "GS", disabled: false },
  { name: "South Sudan", value: "SS", disabled: false },
  { name: "Spain", value: "ES", disabled: false },
  { name: "Sri Lanka", value: "LK", disabled: false },
  { name: "Sudan", value: "SD", disabled: false },
  { name: "Suriname", value: "SR", disabled: false },
  { name: "Svalbard and Jan Mayen", value: "SJ", disabled: false },
  { name: "Swaziland", value: "SZ", disabled: false },
  { name: "Sweden", value: "SE", disabled: false },
  { name: "Switzerland", value: "CH", disabled: false },
  { name: "Syrian Arab Republic", value: "SY", disabled: false },
  { name: "Taiwan", value: "TW", disabled: false },
  { name: "Tajikistan", value: "TJ", disabled: false },
  { name: "Tanzania, United Republic of", value: "TZ", disabled: false },
  { name: "Thailand", value: "TH", disabled: false },
  { name: "Timor-Leste", value: "TL", disabled: false },
  { name: "Togo", value: "TG", disabled: false },
  { name: "Tokelau", value: "TK", disabled: false },
  { name: "Tonga", value: "TO", disabled: false },
  { name: "Trinidad and Tobago", value: "TT", disabled: false },
  { name: "Tunisia", value: "TN", disabled: false },
  { name: "Turkey", value: "TR", disabled: false },
  { name: "Turkmenistan", value: "TM", disabled: false },
  { name: "Turks and Caicos Islands", value: "TC", disabled: false },
  { name: "Tuvalu", value: "TV", disabled: false },
  { name: "Uganda", value: "UG", disabled: false },
  { name: "Ukraine", value: "UA", disabled: false },
  { name: "United Arab Emirates", value: "AE", disabled: false },
  { name: "United States Minor Outlying Islands", value: "UM", disabled: false },
  { name: "Uruguay", value: "UY", disabled: false },
  { name: "Uzbekistan", value: "UZ", disabled: false },
  { name: "Vanuatu", value: "VU", disabled: false },
  { name: "Venezuela, Bolivarian Republic of", value: "VE", disabled: false },
  { name: "Viet Nam", value: "VN", disabled: false },
  { name: "Virgin Islands, British", value: "VG", disabled: false },
  { name: "Virgin Islands, U.S.", value: "VI", disabled: false },
  { name: "Wallis and Futuna", value: "WF", disabled: false },
  { name: "Western Sahara", value: "EH", disabled: false },
  { name: "Yemen", value: "YE", disabled: false },
  { name: "Zambia", value: "ZM", disabled: false },
  { name: "Zimbabwe", value: "ZW", disabled: false },
];

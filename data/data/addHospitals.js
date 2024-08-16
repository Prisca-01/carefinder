var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                    ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
require('dotenv').config();
const { collection, addDoc } = require('firebase/firestore');
const { db } = require('../src/utils/firebaseConfig');
var hospitals = [
  {
    name: 'Life International Hospital',
    address:
      "Along Zik's Avenue near Finotel Hotel & Juhel Filling Station Agu-Awka, Awka, Anambra State, Nigeria",
    phone: '+234 (0)703 661 5974 | +234 (0)706 429 5984',
    email: 'info@lifeinternationalhospital.org',
    description:
      'Life International Hospital provides comprehensive medical care with a focus on quality and patient satisfaction. Our state-of-the-art facility offers a range of services including surgery, diagnostics, and emergency care.',
    city: 'Awka',
    state: 'Anambra',
    website: 'http://lifeinternationalhospital.org',
    image: '/images/hospitals/hospitals1.jpg',
    services: ['General Medicine', 'Surgery', 'Diagnostics'],
  },
  {
    name: 'Chukwuemeka Odumegwu Ojukwu University Teaching Hospital (COOUTH)',
    address: 'Araba Umuzocha, Amaku Awka, Anambra State, Nigeria',
    phone: '+234-803-574-0379, 0806 316 0229',
    email: 'coouth@anambrastate.gov.ng',
    website: 'https://coouth.anambrastate.gov.ng/',
    description:
      'COOUTH is a teaching hospital that provides medical education and high-quality patient care in various specialties.',
    city: 'Awka',
    state: 'Anambra',
    image: '/images/hospitals/coouth.jpg',
    services: ['General Medicine', 'Surgery', 'Diagnostics'],
  },
  {
    name: 'Amen Specialist Diagnostic Clinic',
    address:
      '24B Okpandu Street, Opp Nkwo Ammayi Market, Awka South, Anambra State, Nigeria',
    phone: '0813 368 3877',
    email: 'contact@healthcenter.com',
    website: '',
    description:
      'Amen Specialist Diagnostic Clinic offers a wide range of diagnostic services to accurately assess patient health conditions.',
    city: 'Awka',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Awka Medical Center',
    address: 'Road 4, House 3, Udoka Housing Estate, Anambra State, Nigeria',
    phone: ' 0805 566 7374',
    email: 'care@careclinic.com',
    website: '',
    description:
      'Awka Medical Center provides general healthcare services with a focus on preventive care and patient education.',
    city: 'Awka',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Graceland Specialist Hospital & Maternity',
    address: 'Old Inec Road, Awka, Anambra, Nigeria',
    phone: '0803 580 5184',
    email: 'info@wellnesshospital.com',
    website: '',
    description:
      'Graceland Specialist Hospital & Maternity is dedicated to maternal and child health, offering both inpatient and outpatient services.',
    city: 'Awka',
    state: 'Anambra',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Okoye Specialist Hospital',
    address: 'No 25 Ema Emeka Street, Awka, Anambra State, Nigeria',
    phone: '0803 676 1210',
    email: '',
    website: '',
    description:
      'Okoye Specialist Hospital focuses on specialist medical services and provides personalized healthcare solutions.',
    city: 'Awka',
    state: 'Anambra',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Rock Foundation Hospital',
    address: '5 Igwebuike Road Awka, Anambra, Nigeria',
    phone: '0803 714 4615',
    email: '',
    website: '',
    description:
      'Rock Foundation Hospital offers a range of medical services with a focus on community health and wellness.',
    city: 'Awka',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
    services: 'Health and Medicine',
  },
  {
    name: 'Regina Caeli Specialist Hospital & Maternity',
    address: 'Along Regina Caeli Road, Awka, Anambra State, Nigeria',
    phone: '0803 672 8786, 0806 409 8185',
    email: 'reginacaelihospitalawk@yahoo.com',
    website: '',
    description:
      'Regina Caeli Specialist Hospital & Maternity provides specialized care for women and children, including maternity services.',
    city: 'Awka',
    state: 'Anambra',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Eldorado Multispecialist Hospital',
    address:
      'No 3, Ozoemena Onyeali Street, Nnodu, Okpuno, Awka, Anambra State',
    phone: ' (+234) 806 293 0742',
    email: 'medicals@eldoradomultispecialist.com',
    website: 'https://www.eldoradomultispecialist.com/',
    description:
      'Eldorado Multi-Specialist Hospital, Awka is a new idea in Awka with the desire, skill, expertise and resources to make quality health care easily accessible and affordable',
    city: 'Awka',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
    services: ['General Medicine', 'Surgery', 'Diagnostics'],
  },
  //   Onitsha Hospitals
  {
    name: 'Iyi-Enu Mission Hospital',
    address: 'Ogidi Idemili LGA, Anambra State Nigeria',
    phone: '+234 803 797 9961, +234 809 129 2015',
    email: 'info@iyienumissionhospital.com',
    website: 'http://iyienuhospital.50webs.org/index.htm',
    description:
      'Iyi-Enu Hospital recognizes the importance of high quality services in the healthcare industry. We are therefore committed to ensuring that our clients receive the best',
    city: 'Ogidi',
    state: 'Anambra',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'St Charles Borromeo Specialist Hospital',
    address: 'St Charles Borromeo Specialist Hospital Onitsha, Nigeria',
    phone: '234-8138955442, +234-9070024778',
    email: 'info@borromeohospital.com',
    website: 'https://borromeohospital.com/',
    description:
      'St. Charles Borromeo Specialist Hospital Onitsha is a multispecialty/multidisciplinary healthcare provider which readily ranks as the biggest private hospital along the West Coast of Africa.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Rose Specialist Hospital',
    address: 'No 14 Njoku crescent Oyolu Fighter 3-3 Onitsha',
    phone: '08060000169, 09155538350',
    email: 'info@rosespecialisthospital.com',
    website: 'https://rosespecialisthospital.com/',
    description:
      'At Rose specialist hospital, our approach to optimal health care is diagnostic based and people-centric.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Blessed Hospital',
    address:
      'Vandez Street, off Limca Road, behind Koka filling station, Isiafor Layout, Obosi, Onitsha.',
    phone: '',
    email: '',
    website: '',
    description: 'Provides health and medical services.',
    city: 'Obosi',
    state: 'Anambra',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: ' New Hope Hospitals & Laboratory',
    address: 'New Hope Hospitals & Laboratory - 80 Modebe Avenue, Onitsha',
    phone: '+2348033045697',
    email: 'info@newhopehospital.org',
    website: 'https://www.newhopehospital.org/',
    description:
      'New Hope Hospitals and Laboratory Limited is a high standard health facility and has staff capacity comprising medical doctors (specialists and medical officers), registered and specialist staff nurses, pharmacist, laboratory scientists, radiographers and varied technicians.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: "St. Mary's Hospital",
    address: '50 Oguta Road, Onitsha.',
    phone: '+234 803 783 5614',
    email: '',
    website: '',
    description: 'Provides comprehensive healthcare services.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Toronto Hospital',
    address: '2 Upper Niger Bridge Road, Onitsha, Anambra Nigeria',
    phone: '0803 796 3306, 0808 170 0700',
    email: 'torontohospital@yahoo.com',
    website: 'http://www.torontohospitalng.com/',
    description: 'Offers a range of medical services.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Immaculate Heart Hospital',
    address: 'Umuezepua, Nkpor, Onitsha.',
    phone: '+234 803 672 8786',
    email: '',
    website: '',
    description: 'Specializes in maternal and child health.',
    city: 'Nkpor',
    state: 'Anambra',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Holy Rosary Specialist Hospital & Maternity',
    address: 'Near Basilica of the Most Holy Trinity, Onitsha, Anambra Nigeria',
    phone: '08068444352, 08033964026',
    email: '',
    website: '',
    description: 'Offers general medical services.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Avon Healthcare Christ The King Specialist & Children Hospital',
    address: '30 Ziks Ave, Fegge 431108, Onitsha, Nigeria ',
    phone: '0803 313 2591',
    email: 'uzoechinaobed@yahoo.com',
    website: 'www.avonhealthcare.com',
    description: 'Provides comprehensive healthcare services.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Holy Rosary Specialty Hospital Waterside',
    address: 'No 1 Mission Road, Onitsha, Nigeria',
    phone: '0912 729 6087',
    email: 'info@holyrosaryhospital.com',
    website: 'https://holyrosaryhospital.com/',
    description:
      'At Holy Rosary, we are dedicated to providing exceptional healthcare services that cater to a wide spectrum of medical needs and embrace the beautiful journey of maternity.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Onitsha',
    address: 'Old Market Road, Onitsha.',
    phone: '+234 803 680 5175',
    email: '',
    website: '',
    description: 'Known for providing essential healthcare services.',
    city: 'Onitsha',
    state: 'Anambra',
    image: '/images/hospitals/hospitals2.jpg',
  },
  //   Nnewi Hospitals
  {
    name: 'Nnamdi Azikiwe University Teaching Hospital',
    address: 'Nnewi Onitsha Old Road, Anambra State, Nigeria',
    phone: '+234 908 389 5285, +234 803 087 5716',
    email: '',
    website: 'https://nauthnnewi.org.ng/',
    description:
      'Nnamdi Azikiwe University Teaching Hospital is a tertiary hospital that provides specialized medical services and training.',
    city: 'Nnewi',
    state: 'Anambra',
    image: '/images/hospitals/hospitals1.jpg',
    location: { lat: 6.02, long: 6.9173 },
  },
  {
    name: 'Our Lady of Lourdes Hospital',
    address:
      'Our Lady of Lourdes Hospital Complex Ihiala , Anambra State, Nigeria',
    phone: '+234(0) 803 759 9916',
    email: 'info@ollhc.com',
    website: 'https://ollhc.com/',
    description:
      'Our Lady of Lourdes Hospital provides a range of medical services with a focus on quality care.',
    city: 'Ihiala',
    state: 'Anambra',
    image: '/images/hospitals/hospitals1.jpg',
    location: { lat: 5.88, long: 6.85 },
  },
  {
    name: "St. Joseph's Hospital",
    address:
      "St. Joseph's Hospital P.O.Box 65 Adazi-Nnukwu, Aniocha LGA, Anambra State, Nigeria.",
    phone: '+234 816 230 8251',
    email: 'hospital@stjhcomplex.com',
    website: 'https://www.sjhcomplex.com/',
    description:
      "St. Joseph's Hospital provides medical diagnostic and screening services, medical examination, drug prescription and general health services.",
    city: 'Adazi Nnukwu',
    state: 'Anambra',
    image: '/images/hospitals/hospitals3.jpg',
    location: { lat: 6.05, long: 7.083 },
  },
  {
    name: 'Joe Nwiloh Heart Center',
    address: 'Adazi Nnukwu, Anambra State, Nigeria',
    phone: '+234 706 969 1638',
    email: 'support@stjhcomplex.com',
    website: 'www.joenwilohheartfoundation.org',
    description:
      'Joe Nwiloh Heart Center is a specialist hospital in Adazi Nnukwu offering surgery and diagnostic cardiovascular procedures.',
    city: 'Adazi Nnukwu',
    state: 'Anambra',
    image: '/images/hospitals/hospitals2.jpg',
    location: { lat: 6.0629, long: 7.0808 },
  },
  {
    name: 'Beacon Hospital & Maternity',
    address:
      '10, Beacon Hospital Street, Odoagba L/Out, Nnewi, Anambra State, Nigeria',
    phone: '0803 456 7890',
    email: 'info@beaconhospital.com',
    website: 'https://www.beaconhospital.com',
    description:
      'Beacon Hospital & Maternity provides general and maternity healthcare services.',
    city: 'Nnewi',
    state: 'Anambra',
    image: '/images/hospitals/hospitals1.jpg',
    location: { lat: 6.0107, long: 6.9123 },
  },
  {
    name: 'New Era Specialist Hospital',
    address:
      'New Era Specialist Hospital, Oda Akpa Nnewi South, Anambra Nigeria',
    phone: '0803 404 7713',
    email: 'pahac@yahoo.com',
    website: '',
    description:
      'New Era Specialist Hospital offers comprehensive medical solutions on gynaecology, obstetrics, pediatric, assisted conception, general medical and surgical service.',
    city: 'Nnewi',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Sefton Specialist Hospital',
    address: '5, Onwubuya Street, Off Court Road, Nimo, Anambra State, Nigeria',
    phone: '',
    email: '',
    website: '',
    description:
      'Sefton Specialist Hospital offers specialized medical services with state-of-the-art facilities.',
    city: 'Nimo',
    state: 'Anambra',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Life Specialist Hospital',
    address: 'No 7 Ikemba Drive, Umuele, Umudim 435101, Nnewi',
    phone: '+234 (0)702 5023 782',
    email: ' info@lifehospital.org',
    website: 'http://www.lifehospital.org/',
    description:
      'We are committed to giving you a world class medical service with a touch of excellence that will leave you a "Happy Satisfied Patient."',
    city: 'Nnewi',
    state: 'Anambra',
    image: '/images/hospitals/hospitals2.jpg',
  },
  // Enugu Hospitals
  {
    name: 'Niger Foundation Hospital and Diagnostic Centre',
    address: 'No 5 Presidential Close, Independence Layout, Enugu, Nigeria',
    phone: '+234 706 569 3009',
    email: 'info@nfh.org.ng',
    website: 'https://www.nfh.org.ng/index.html',
    description:
      'Niger Foundation Hospital and Diagnostic Centre is a multi-specialty private hospital that provides a range of medical services.',
    city: 'Enugu',
    state: 'Enugu',
    image: '/images/hospitals.jpg',
    // location: { lat: , long:  },
  },
  {
    name: 'University of Nigeria Teaching Hospital (UNTH)',
    address: 'Ituku-Ozalla, Enugu State, Nigeria',
    phone: '07041322008',
    email: 'info@unthenugu.com.ng',
    website: 'https://unth.edu.ng/',
    description:
      'UNTH is a tertiary hospital that provides specialized medical services and training.',
    city: 'Ituku-Ozalla',
    state: 'Enugu',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Mother of Christ Specialist Hospital',
    address:
      'Mother of Christ Specialist Hospital Ogui, Enugu, Next to Holy Ghost Cathedral, Enugu, Nigeria',
    phone: ' 07066747591',
    email: ' info@motherofchristspecialisthospital.org.ng',
    website: 'https://www.motherofchristspecialisthospital.org.ng/',
    description:
      'At Mother of Christ Specialist Hospital Enugu. your health needs are given exceptional care with an outstanding reputation for delivering excellent services in Obstetrics and Gynaecology, surgeries, etc',
    city: 'Enugu',
    state: 'Enugu',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Memfys Hospital for Neurosurgery',
    address: 'Km 2 Enugu-Onitsha Expressway, Trans-Ekulu, Enugu, Nigeria',
    phone: '+234 806-715-7635',
    email: 'info@memfys.net',
    website: 'https://memfys.net/',
    description:
      'Memfys Hospital is a neurosurgical hospital that provides specialized care for neurological conditions and other medical services.',
    city: 'Trans-Ekulu',
    state: 'Enugu',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'National Orthopaedic Hospital',
    address: 'Abakpa junction Abakiliki road Enugu. Nigeria.',
    phone: '+234 813 848 1326',
    email: 'noheadmin@nohenugu.org.ng',
    website: 'https://www.nohenugu.org.ng/',
    description:
      'National Orthopaedic Hospital is a hospital providing healthcare services in fields related to orthopeadics accident and emergency care, burns, plastic surgery, and medical rehabilitation.',
    city: 'Enugu',
    state: 'Enugu',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Bishop Shannahan Specialist Hospital',
    address: 'No 9 Enugu Road Odenigwe Nsukka, Enugu, Nigeria.',
    phone: '+234 807 040 6266',
    email: '',
    website: 'https://bishopshanahanhospital.org.ng/',
    description:
      'Bishop Shanahan Hospital is a private hospital established by catholic diocese of Nsukka with the aim of providing health care services to the masses including the poor and the rich, also training nurses and midwives in the field of medicine.',
    city: 'Nsukka',
    state: 'Enugu',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Enugu State University of Science and Technology Teaching Hospital',
    address: 'ESUT Teaching Hospital Parklane, Enugu',
    phone: '+234 809 884 4229 ',
    email: 'info@esutth.org.ng',
    website: 'https://www.esutth.edu.ng/',
    description:
      'A major teaching hospital in Enugu offering comprehensive medical services.',
    city: 'Enugu',
    state: 'Enugu',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'St. Charles Borromeo Hospital',
    address: 'Umundu, Nsukka',
    phone: '+234 42 805 890',
    email: 'info@stcharlesborromeo.org',
    website: 'http://stcharlesborromeo.org',
    description: 'Catholic hospital providing health services in Nsukka.',
    city: 'Nsukka',
    state: 'Enugu',
    image: '/images/hospitals/hospitals3.jpg',
    location: { lat: 6.8701, long: 7.3896 },
  },
  {
    name: 'Akulue Memorial Hospital',
    address: '16/18 Akulue Road, Onuiyi, Nsukka, Enugu Nigeria',
    phone: '',
    email: '',
    website: 'https://akuluehospital.org.ng/',
    description:
      'Akulue Memorial Hospital is one of the oldest hospital in Nsukka that offers medical services in surgery, pediatrics, x-ray & imaging, laboratory services and lots more.',
    city: 'Nsukka',
    state: 'Enugu',
    image: '/images/hospitals/hospitals1.jpg',
  },
  // Akwa Ibom Hospitals
  {
    name: 'University of Uyo Teaching Hospital',
    address: 'Abak Road, Uyo, Akwa Ibom State',
    phone: '+234 813 456 7890',
    email: 'info@uuth.edu.ng',
    website: 'http://www.uuth.edu.ng/',
    description:
      'A major teaching hospital affiliated with the University of Uyo, offering comprehensive healthcare services.',
    city: 'Uyo',
    state: 'Akwa Ibom',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Ibom Specialist Hospital',
    address: 'Uyo, Akwa Ibom State',
    phone: '+234 812 345 6789',
    email: 'info@ibomspecialisthospital.com',
    website: 'http://www.ibomspecialisthospital.com/',
    description:
      'A world-class hospital equipped with modern facilities, providing specialized medical care.',
    city: 'Uyo',
    state: 'Akwa Ibom',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'St. Luke’s Hospital',
    address: 'Anua, Uyo, Akwa Ibom State',
    phone: '+234 814 567 8901',
    email: 'info@stlukesuyo.com',
    website: '',
    description:
      'Offers a range of medical services to the community, with a focus on compassionate care.',
    city: 'Uyo',
    state: 'Akwa Ibom',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Immanuel General Hospital',
    address: 'Eket, Akwa Ibom State',
    phone: '+234 815 678 9012',
    email: '',
    website: '',
    description:
      'Provides general healthcare services to the residents of Eket and its environs.',
    city: 'Eket',
    state: 'Akwa Ibom',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Ikot Ekpene',
    address: 'Ikot Ekpene, Akwa Ibom State',
    phone: '+234 816 789 0123',
    email: '',
    website: '',
    description:
      'Offers medical care to the people of Ikot Ekpene and surrounding areas.',
    city: 'Ikot Ekpene',
    state: 'Akwa Ibom',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Adamawa Hospitals
  {
    name: 'Federal Medical Centre Yola',
    address: 'Lamido Zubairu Way, Yola, Adamawa State',
    phone: '+234 803 123 4567',
    email: 'info@fmcyola.gov.ng',
    website: 'http://www.fmcyola.gov.ng/',
    description:
      'A federal medical center providing comprehensive healthcare services and medical training.',
    city: 'Yola',
    state: 'Adamawa',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Adamawa State Specialist Hospital',
    address: 'Jimeta, Yola, Adamawa State',
    phone: '+234 807 456 7890',
    email: 'info@adamawaspecialisthospital.com',
    website: '',
    description:
      'Offers specialized healthcare services to the residents of Jimeta and its environs.',
    city: 'Jimeta',
    state: 'Adamawa',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Cottage Hospital Numan',
    address: 'Numan, Adamawa State',
    phone: '+234 812 345 6789',
    email: '',
    website: '',
    description:
      'Provides general healthcare services to the community of Numan and surrounding areas.',
    city: 'Numan',
    state: 'Adamawa',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Mubi',
    address: 'Mubi, Adamawa State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Offers medical care to the residents of Mubi and neighboring regions.',
    city: 'Mubi',
    state: 'Adamawa',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Hong',
    address: 'Hong, Adamawa State',
    phone: '+234 809 123 4567',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the people of Hong and its environs.',
    city: 'Hong',
    state: 'Adamawa',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Bauchi Hospitals
  {
    name: 'Abubakar Tafawa Balewa University Teaching Hospital',
    address: 'Bauchi, Bauchi State',
    phone: '+234 803 234 5678',
    email: 'info@atbuth.org',
    website: 'http://www.atbuth.org/',
    description:
      'A major teaching hospital providing a wide range of healthcare services and medical education.',
    city: 'Bauchi',
    state: 'Bauchi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Specialist Hospital Bauchi',
    address: 'Ran Road, Bauchi, Bauchi State',
    phone: '+234 805 456 7890',
    email: '',
    website: '',
    description:
      'Offers specialized medical services to the residents of Bauchi and its surroundings.',
    city: 'Bauchi',
    state: 'Bauchi',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Azare',
    address: 'Azare, Bauchi State',
    phone: '+234 807 678 9012',
    email: '',
    website: '',
    description:
      'Provides general healthcare services to the Azare community and neighboring areas.',
    city: 'Azare',
    state: 'Bauchi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Misau',
    address: 'Misau, Bauchi State',
    phone: '+234 812 345 6789',
    email: '',
    website: '',
    description:
      'Offers medical care to the residents of Misau and surrounding regions.',
    city: 'Misau',
    state: 'Bauchi',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Katagum',
    address: 'Katagum, Bauchi State',
    phone: '+234 811 789 0123',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the people of Katagum and its environs.',
    city: 'Katagum',
    state: 'Bauchi',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Bayelsa Hospitals
  {
    name: 'Bayelsa State Teaching Hospital',
    address: 'Yenagoa, Bayelsa State',
    phone: '+234 811 234 5678',
    email: 'info@bayelsateachinghospital.com',
    website: 'http://www.bayelsateachinghospital.com/',
    description:
      'A major teaching hospital providing comprehensive healthcare services and medical training.',
    city: 'Yenagoa',
    state: 'Bayelsa',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Federal Medical Centre Yenagoa',
    address: 'Yenagoa, Bayelsa State',
    phone: '+234 803 456 7890',
    email: 'info@fmc-yenagoa.gov.ng',
    website: 'http://www.fmc-yenagoa.gov.ng/',
    description:
      'Offers a range of medical services including specialized care and emergency services.',
    city: 'Yenagoa',
    state: 'Bayelsa',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Brass',
    address: 'Brass, Bayelsa State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Provides general medical services to the Brass community and its environs.',
    city: 'Brass',
    state: 'Bayelsa',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Sagbama',
    address: 'Sagbama, Bayelsa State',
    phone: '+234 812 345 6789',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the residents of Sagbama and neighboring areas.',
    city: 'Sagbama',
    state: 'Bayelsa',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Ogbia',
    address: 'Ogbia, Bayelsa State',
    phone: '+234 809 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the Ogbia community and surrounding regions.',
    city: 'Ogbia',
    state: 'Bayelsa',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Benue Hospitals
  {
    name: 'Benue State University Teaching Hospital',
    address: 'Makurdi, Benue State',
    phone: '+234 703 123 4567',
    email: 'info@bsuth.edu.ng',
    website: 'http://www.bsuth.edu.ng/',
    description:
      'A prominent teaching hospital offering comprehensive medical care and training in collaboration with Benue State University.',
    city: 'Makurdi',
    state: 'Benue',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Federal Medical Centre Makurdi',
    address: 'Makurdi, Benue State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-makurdi.gov.ng',
    website: 'http://www.fmc-makurdi.gov.ng/',
    description:
      'Provides a range of medical services including emergency care and specialized treatments.',
    city: 'Makurdi',
    state: 'Benue',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Gboko',
    address: 'Gboko, Benue State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Gboko community and its surroundings.',
    city: 'Gboko',
    state: 'Benue',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Otukpo',
    address: 'Otukpo, Benue State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Otukpo and nearby areas.',
    city: 'Otukpo',
    state: 'Benue',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Katsina-Ala',
    address: 'Katsina-Ala, Benue State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Katsina-Ala community and its neighboring regions.',
    city: 'Katsina-Ala',
    state: 'Benue',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Borno Hospitals
  {
    name: 'University of Maiduguri Teaching Hospital',
    address: 'Maiduguri, Borno State',
    phone: '+234 802 123 4567',
    email: 'info@umth.org.ng',
    website: 'http://www.umth.org.ng/',
    description:
      'A major teaching hospital offering a wide range of healthcare services and medical education.',
    city: 'Maiduguri',
    state: 'Borno',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Federal Medical Centre Maiduguri',
    address: 'Maiduguri, Borno State',
    phone: '+234 803 456 7890',
    email: 'info@fmcmaiduguri.gov.ng',
    website: 'http://www.fmcmaiduguri.gov.ng/',
    description:
      'Provides comprehensive medical services including emergency care and specialized treatments.',
    city: 'Maiduguri',
    state: 'Borno',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Biu',
    address: 'Biu, Borno State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Biu community and neighboring areas.',
    city: 'Biu',
    state: 'Borno',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Gombe',
    address: 'Gombe, Borno State',
    phone: '+234 812 345 6789',
    email: '',
    website: '',
    description:
      'Provides medical care to residents of Gombe and surrounding regions.',
    city: 'Gombe',
    state: 'Borno',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Konduga',
    address: 'Konduga, Borno State',
    phone: '+234 811 678 9012',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Konduga community and its surrounding areas.',
    city: 'Konduga',
    state: 'Borno',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Cross River Hospitals
  {
    name: 'University of Calabar Teaching Hospital',
    address: 'Calabar, Cross River State',
    phone: '+234 703 123 4567',
    email: 'info@ucth.edu.ng',
    website: 'http://www.ucth.edu.ng/',
    description:
      'A major teaching hospital offering comprehensive healthcare services and medical education.',
    city: 'Calabar',
    state: 'Cross River',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Federal Medical Centre Calabar',
    address: 'Calabar, Cross River State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-calabar.gov.ng',
    website: 'http://www.fmc-calabar.gov.ng/',
    description:
      'Provides a range of medical services including specialized care and emergency services.',
    city: 'Calabar',
    state: 'Cross River',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Ogoja',
    address: 'Ogoja, Cross River State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Ogoja community and its surroundings.',
    city: 'Ogoja',
    state: 'Cross River',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Ikom',
    address: 'Ikom, Cross River State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Ikom and neighboring areas.',
    city: 'Ikom',
    state: 'Cross River',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Akamkpa',
    address: 'Akamkpa, Cross River State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Akamkpa community and surrounding regions.',
    city: 'Akamkpa',
    state: 'Cross River',
    image: '/images/hospitals/hospitals3.jpg',
  },
  //   Delta Hospitals
  {
    name: 'Delta State University Teaching Hospital',
    address:
      'Otefe Road, off Benin-Warri Express Way, Oghara, Delta State Nigeria',
    phone: '0813 270 7598',
    email: 'info@delsuth.com.ng',
    website: 'http://www.delsuthoghara.com/',
    description: '',
    city: 'Oghara',
    state: 'Delta',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Westend Hospital and Diagnostic Centre',
    address:
      'No 1, 25th Street,  Westend Hospital Road, D.D.P.A., Off Airport Road, Ugborikoko, Effurun, Warri',
    phone: '+234 802 537 4579',
    email: '',
    website: 'https://www.thewestendhospital.com/',
    description: '',
    city: 'Warri',
    state: 'Delta',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Mount Horeb Clinic & Dialysis Centre, Delta State (Missionary)',
    address: '50 Water Resources Road Effurun, Warri, Delta State',
    phone: '2348032551636',
    email: '',
    website: '',
    description: '',
    city: '',
    state: '',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Lily Hospital',
    address:
      '6 Brisibe Lane, off Etuwewe Road, Off Deco Road, Warri, Delta State',
    phone: '+234 8069912996 | 08113690592',
    email: 'contact@lilyhospitals.net | info@lilyhospitals.net',
    website: 'https://lilyhospitals.com/',
    description:
      "Visit Lily Hospitals Warri, Nigeria's leading multi-specialist hospital, offering patient-centered care across various specialties",
    city: 'Warri',
    state: 'Delta',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'St. Lukes Hospital',
    address:
      'Saint Lukes Hospital, Delta Broadcasting Service Rd, Central Area 320108, Asaba, Delta',
    phone: '(+234)-915-074-4680',
    email: 'support@slh.com.ng',
    website: 'https://www.slh.com.ng/',
    description:
      'St. Luke’s Hospital is an ultra-modern, privately owned hospital built with a vision to render quality healthcare service comparable to the world’s best. ',
    city: 'Asaba',
    state: 'Delta',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Bryants Hospital Limited',
    address:
      'No 13 Eti Street, Off Emebiren, Okumagba, Warri, Delta State, Nigeria',
    phone: '0803 551 0498, 0812 972 8389, 0706 266 3989',
    email: 'info@bryantshospital.com',
    website: 'http://www.bryantshospital.com/',
    description:
      'Bryants Hospital Limited is a private hospital that provides a range of medical services such as laboratory,  medical and several general surgical conditons such as appendectomy, herniorrhaphy and lumpectomy..',
    city: 'Warri',
    state: 'Delta',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Federal Medical Centre',
    address: 'No 4, Anwai Road, Nnebisi Road,  Asaba, Delta State, Nigeria',
    phone: '+234 817 177 7722, +234 805 555 4759',
    email: 'info@fmcasaba.org',
    website: 'https://fmcasaba.org/',
    description:
      'Federal Medical Centre Asaba is a tertiary hospital that provides specialized medical services and training.',
    city: 'Asaba',
    state: 'Delta',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'St. Josephs Catholic Hospital',
    address: '142 Nnebisi Road,  Asaba, Delta State Nigeria',
    phone: '0803 230 0170, 0810 179 4977',
    email: 'stjoseph.catholichospital@yahoo.com',
    website: '',
    description:
      'St. Josephs Catholic Hospital is a faith-based hospital that provides medical services with a focus on quality care.',
    city: 'Asaba',
    state: 'Delta',
    image: '/images/hospitals/hospitals2.jpg',
  },
  // Edo Hospitals
  {
    name: 'Edo State University Teaching Hospital',
    address: 'Iyamho, Edo State',
    phone: '+234 803 123 4567',
    email: 'info@edostateuniversityhospital.edu.ng',
    website: 'http://www.edostateuniversityhospital.edu.ng/',
    description:
      'A prominent teaching hospital offering a broad range of healthcare services and medical training.',
    city: 'Iyamho',
    state: 'Edo',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Federal Medical Centre Ekpoma',
    address: 'Ekpoma, Edo State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-ekpoma.gov.ng',
    website: 'http://www.fmc-ekpoma.gov.ng/',
    description:
      'Provides comprehensive medical services including specialized care and emergency services.',
    city: 'Ekpoma',
    state: 'Edo',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Benin City',
    address: 'Benin City, Edo State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Benin City community and its surroundings.',
    city: 'Benin City',
    state: 'Edo',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Uromi',
    address: 'Uromi, Edo State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Uromi and neighboring regions.',
    city: 'Uromi',
    state: 'Edo',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Auchi',
    address: 'Auchi, Edo State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Auchi community and surrounding areas.',
    city: 'Auchi',
    state: 'Edo',
    image: '/images/hospitals/hospitals1.jpg',
  },
  //Ekiti Hospitals
  {
    name: 'Ekiti State University Teaching Hospital',
    address: 'Ado-Ekiti, Ekiti State',
    phone: '+234 703 123 4567',
    email: 'info@esuth.edu.ng',
    website: 'http://www.esuth.edu.ng/',
    description:
      'A major teaching hospital providing comprehensive healthcare services and medical education.',
    city: 'Ado-Ekiti',
    state: 'Ekiti',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Federal Medical Centre Ido-Ekiti',
    address: 'Ido-Ekiti, Ekiti State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-idokiti.gov.ng',
    website: 'http://www.fmc-idokiti.gov.ng/',
    description:
      'Offers a range of medical services including specialized care and emergency services.',
    city: 'Ido-Ekiti',
    state: 'Ekiti',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Ikole-Ekiti',
    address: 'Ikole-Ekiti, Ekiti State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Provides general healthcare services to the Ikole-Ekiti community and its surroundings.',
    city: 'Ikole-Ekiti',
    state: 'Ekiti',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Oye-Ekiti',
    address: 'Oye-Ekiti, Ekiti State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Offers medical care to residents of Oye-Ekiti and neighboring areas.',
    city: 'Oye-Ekiti',
    state: 'Ekiti',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Ado-Ekiti',
    address: 'Ado-Ekiti, Ekiti State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the Ado-Ekiti community and its surroundings.',
    city: 'Ado-Ekiti',
    state: 'Ekiti',
    image: '/images/hospitals/hospitals1.jpg',
  },
  // Gombe Hospitals
  {
    name: 'Gombe State University Teaching Hospital',
    address: 'Gombe, Gombe State',
    phone: '+234 703 123 4567',
    email: 'info@gsuth.edu.ng',
    website: 'http://www.gsuth.edu.ng/',
    description:
      'A major teaching hospital offering a broad range of healthcare services and medical education.',
    city: 'Gombe',
    state: 'Gombe',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Federal Medical Centre Gombe',
    address: 'Gombe, Gombe State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-gombe.gov.ng',
    website: 'http://www.fmc-gombe.gov.ng/',
    description:
      'Provides a range of medical services including emergency care and specialized treatments.',
    city: 'Gombe',
    state: 'Gombe',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Kaltungo',
    address: 'Kaltungo, Gombe State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Kaltungo community and surrounding areas.',
    city: 'Kaltungo',
    state: 'Gombe',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Bajoga',
    address: 'Bajoga, Gombe State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to residents of Bajoga and neighboring regions.',
    city: 'Bajoga',
    state: 'Gombe',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Billiri',
    address: 'Billiri, Gombe State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Billiri community and surrounding areas.',
    city: 'Billiri',
    state: 'Gombe',
    image: '/images/hospitals.jpg',
  },
  //   Rivers
  {
    name: 'Nobsams Hospital',
    address: '44 Trans-Amadi Industrial Layout Rd, Trans Amadi, Port Harcourt',
    phone: '08182132215',
    email: 'nobsamshospitals@gmail.com',
    website: 'http://www.nobsamshospitals.com/',
    description:
      'Nobsams Hospital is an esteemed healthcare center that renders quality medical & healthcare services.',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Rivers State University Teaching Hospital',
    address:
      '6 - 8 Harley Street, Forces Avenue, Old GRA, Port Harcourt, Rivers Sate',
    phone: '08151491555',
    email: '',
    website: 'https://www.rsuth.ng/',
    description:
      'Rivers State University Teaching Hospital is a tertiary hospital that provides specialized medical services and training.',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'First Rivers Hospital Ltd ',
    address: '7/9 Old Aba Road, Rumuogba, Port Harcourt, Rivers State',
    phone: '0815 849 3600',
    email: 'martinnezus@yahoo.com',
    website: 'https://web.facebook.com/firstrivers/',
    description: '',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Meridian Hospital',
    address: '21 Igbokwe Street, D-Line, Port Harcourt, Rivers State',
    phone: '+234-808-282-6030, +234-809-360-6151',
    email: 'info@meridianhospitals.net',
    website: 'https://meridianhospitals.net/',
    description:
      'Meridian Hospital is a leading multi-specialist health institution in an environment that provides no less in standard',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Higgwe Memorial Specialist Hospital',
    address: '108 NTA Road, Mgbuoba, Port Harcourt, Port Harcourt, Nigeria',
    phone: '0803 262 9228',
    email: 'vobaabilefia@gmail.com',
    website: 'https://web.facebook.com/Higgwehospital/',
    description:
      'Higgwe Memorial Specialist Hospital is rated highly as one of the best private tertiary care multi-specialty hospitals in Nigeria.',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'C.Bennett Specialist Hospital',
    address:
      '100 Shell Location Rd (Apirikom) By Open Doors Rd, Ada George., Port Harcourt, Nigeria',
    phone: '08058128251',
    email: 'c.bennetthospital@gmail.com',
    website: 'https://web.facebook.com/CBSHNG',
    description:
      'C.Bennett Specialist Hospital is a private hospital that provides a range of medical services.',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'SaveALife Mission Hospital',
    address: '38 Uyo Street, Off Stadium Rd, Rumuomasi, Port Harcourt',
    phone: '07044000138',
    email: ' info@savealifehospital.com',
    website: 'https://savealifehospital.com/',
    description:
      'First African Digitalized Hospital. SaveALife Mission Hospital is an ISO-Certified group of hospitals with over 500 bed strength, fully equipped for multi-specialty procedures including: IVF/ICSI Fertility Treatment, Laparoscopy, Knee/Hip Replacement, Laser Cataract and Prostate surgeries, Liver transplant etc..',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'St. Catherine’s Specialist Hospital ',
    address:
      '17B, Akhiakara Street by Nwaja junction, Trans Amadi Portharcourt, Rivers state',
    phone: '+234-92911861, +234-84361530, 09087830747',
    email: 'info@stcatherineshospital.net',
    website: 'http://stcatherineshospital.net/new/',
    description:
      'At St. Catherine’s specialist hospitals limited, we have a team of highly experienced and skilled medical workforce as well as support staff that work together to ensure that the hospital becomes a world class hospital and actively participate in medical tourism.',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Abundant health specialist hospital',
    address:
      ' 9 Aleruchi Close, off, 5 Ada-George Road, beside Blue Diamond Supermarket, 500102, Port Harcourt',
    phone: '0803 791 0987',
    email: '',
    website: 'https://abundanthealthmed.wixsite.com/consultation',
    description: '',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Pamo Clinics and Hospitals',
    address: '300 Ph/Aba Express Way, Port Harcourt',
    phone: '08083752884',
    email: 'hello@pamoclinics.com',
    website: 'https://pamoclinics.com/',
    description:
      'Pamo Clinics and Hospitals Limited is a comprehensive medium complex that runs a 24-hour service for primary, secondary and tertiary Health care Delivery in the heart of Port-Harcourt, Rivers State capital.',
    city: 'Port Harcourt',
    state: 'Rivers',
    image: '/images/hospitals/hospitals1.jpg',
  },
  // Abia Hospitals
  {
    name: 'Federal Medical Centre',
    address: 'Aba Rd, opposite Guaranty Trust Bank, Umuahia 440221, Abia',
    phone: ' +234 8038089468',
    email: ' fmcumuahia@fmc-umuahia.com.ng',
    website: 'https://fmc-umuahia.com.ng',
    description:
      'Federal Medical Centre Umuahia is a tertiary hospital that provides specialized medical services and training.',
    city: 'Umuahia',
    state: 'Abia',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Abia State University Teaching Hospital',
    address: 'ABSUTH, Umuahia, Umuahia, Abia',
    phone: '+234 803 677 8221',
    email: '',
    website: 'https://abiastateuniversity.edu.ng/',
    description: 'A',
    city: 'Umuahia',
    state: 'Abia',
    image: '/images/hospitals/hospitals2.jpg',
  },
  // Imo Hospitals
  {
    name: 'St Marys Hospital Umuowa Orlu',
    address: 'Klm 3 Hospital/first Bank Road Umuowa, Orlu, Imo ',
    phone: '08052972747',
    email: '',
    website: 'https://www.stmaryshospitalumuowa.com/',
    description:
      'At St. Mary’s Children and Community Hospital, Umuowa, we strive to ensure patients have exceptional and equal access to high-quality care while addressing identified child, teen and family health needs in the community.',
    city: 'Orlu',
    state: 'Imo',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Mark Of Glory Specialist Hospital',
    address:
      '3 Emeremadu Street, New Owerri, Owerri 460102, Imo, Nigeria, Owerri, Imo State',
    phone: '+234 805 949 8186, 234 806 198 1496',
    email: ' info@markofglory.com',
    website: 'https://markofglory.com/',
    description:
      'We render essential medical services to both our primary in-patients as well as other patients referred to our hospital for specialist and other related care, with strong emphasis in Neurology … ',
    city: 'Owerri',
    state: 'Imo',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Imo State University Teaching Hospital',
    address: 'Teaching Hospital Rd, Umuna, Orlu, Nigeria',
    phone: '0803 404 8270',
    email: 'imsuthinfor@imsuth.org.ng',
    website:
      'https://web.facebook.com/people/Imo-State-University-Teaching-Hospital/100067586640277/',
    description: '',
    city: 'Orlu',
    state: 'Imo',
    image: '/images/hospitals.jpg',
  },
  //Ebonyi Hospitals
  {
    name: 'Alex Ekwueme Federal University Teaching Hospital',
    address: 'FMC Rd, Abakaliki, Nigeria, Abakaliki, Ebonyi State ',
    phone: ' 09032419744, 08138317048',
    email: ' enquiries@aefutha.gov.ng',
    website: 'https://aefutha.gov.ng/',
    description: 'Excellent Healthcare starts here',
    city: 'Abakaliki',
    state: 'Ebonyi',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Federal Teaching Hospital Abakaliki',
    address: 'Abakaliki, Ebonyi State',
    phone: '+234 703 123 4567',
    email: 'info@ftha.edu.ng',
    website: 'http://www.ftha.edu.ng/',
    description:
      'A major teaching hospital providing comprehensive healthcare services and medical education in Ebonyi State.',
    city: 'Abakaliki',
    state: 'Ebonyi',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Ebonyi State University Teaching Hospital',
    address: 'Abakaliki, Ebonyi State',
    phone: '+234 802 345 6789',
    email: 'info@ebsu.edu.ng',
    website: 'http://www.ebsu.edu.ng/',
    description:
      'Offers specialized medical services and education, serving as a key healthcare institution in Ebonyi State.',
    city: 'Abakaliki',
    state: 'Ebonyi',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Ebonyi',
    address: 'Ebonyi, Ebonyi State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Provides general healthcare services to the Ebonyi community and its surroundings.',
    city: 'Ebonyi',
    state: 'Ebonyi',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Izzi',
    address: 'Izzi, Ebonyi State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Izzi community and surrounding regions.',
    city: 'Izzi',
    state: 'Ebonyi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Ohaozara',
    address: 'Ohaozara, Ebonyi State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Ohaozara and neighboring areas.',
    city: 'Ohaozara',
    state: 'Ebonyi',
    image: '/images/hospitals/hospitals1.jpg',
  },
  // Jigawa Hospitals
  {
    name: 'Gombe State University Teaching Hospital',
    address: 'Gombe, Gombe State',
    phone: '+234 703 123 4567',
    email: 'info@gsuth.edu.ng',
    website: 'http://www.gsuth.edu.ng/',
    description:
      'A major teaching hospital offering a broad range of healthcare services and medical education.',
    city: 'Gombe',
    state: 'Gombe',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Federal Medical Centre Gombe',
    address: 'Gombe, Gombe State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-gombe.gov.ng',
    website: 'http://www.fmc-gombe.gov.ng/',
    description:
      'Provides a range of medical services including emergency care and specialized treatments.',
    city: 'Gombe',
    state: 'Gombe',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Kaltungo',
    address: 'Kaltungo, Gombe State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Kaltungo community and surrounding areas.',
    city: 'Kaltungo',
    state: 'Gombe',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Bajoga',
    address: 'Bajoga, Gombe State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to residents of Bajoga and neighboring regions.',
    city: 'Bajoga',
    state: 'Gombe',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Billiri',
    address: 'Billiri, Gombe State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Billiri community and surrounding areas.',
    city: 'Billiri',
    state: 'Gombe',
    image: '/images/hospitals/hospitals2.jpg',
  },
  // Nasarawa Hospitals
  {
    name: 'Nasarawa State University Teaching Hospital',
    address: 'Keffi, Nasarawa State',
    phone: '+234 703 123 4567',
    email: 'info@nsuth.edu.ng',
    website: 'http://www.nsuth.edu.ng/',
    description:
      'A major teaching hospital providing comprehensive healthcare services and medical training.',
    city: 'Keffi',
    state: 'Nasarawa',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Federal Medical Centre Keffi',
    address: 'Keffi, Nasarawa State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-keffi.gov.ng',
    website: 'http://www.fmc-keffi.gov.ng/',
    description:
      'Offers a range of medical services including emergency care and specialized treatments.',
    city: 'Keffi',
    state: 'Nasarawa',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Lafia',
    address: 'Lafia, Nasarawa State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Provides general healthcare services to the Lafia community and its surroundings.',
    city: 'Lafia',
    state: 'Nasarawa',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Akwanga',
    address: 'Akwanga, Nasarawa State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Offers medical care to residents of Akwanga and neighboring areas.',
    city: 'Akwanga',
    state: 'Nasarawa',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Doma',
    address: 'Doma, Nasarawa State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the Doma community and surrounding areas.',
    city: 'Doma',
    state: 'Nasarawa',
    image: '/images/hospitals.jpg',
  },
  // Niger Hospitals
  {
    name: 'Niger State University Teaching Hospital',
    address: 'Minna, Niger State',
    phone: '+234 703 123 4567',
    email: 'info@nsuth.edu.ng',
    website: 'http://www.nsuth.edu.ng/',
    description:
      'A prominent teaching hospital offering comprehensive healthcare services and medical education.',
    city: 'Minna',
    state: 'Niger',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Federal Medical Centre Bida',
    address: 'Bida, Niger State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-bida.gov.ng',
    website: 'http://www.fmc-bida.gov.ng/',
    description:
      'Provides a range of medical services including emergency care and specialized treatments.',
    city: 'Bida',
    state: 'Niger',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Kontagora',
    address: 'Kontagora, Niger State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Kontagora community and its surroundings.',
    city: 'Kontagora',
    state: 'Niger',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Suleja',
    address: 'Suleja, Niger State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Suleja and neighboring areas.',
    city: 'Suleja',
    state: 'Niger',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Lapai',
    address: 'Lapai, Niger State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Lapai community and surrounding regions.',
    city: 'Lapai',
    state: 'Niger',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Oyo Hospitals
  {
    name: 'University College Hospital',
    address: 'Queen Elizabeth Road, Ibadan, Oyo State',
    phone: '+234 813 173 3447',
    email: 'cmd@uch-ibadan.org.ng',
    website: 'https://uch-ibadan.org.ng/',
    description:
      'Rendering excellent, prompt, affordable and accessible health care in an environment that promotes hope and dignity, irrespective of status, and developing high quality health personnel in an atmosphere that stimulates excellent and relevant research',
    city: 'Ibadan',
    state: 'Oyo',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'J-Rapha Hospital & Maternity Ltd Ibadan ',
    address: '3, Ladoke Akintola Avenue, New Bodija, Ibadan, Nigeria',
    phone: '0813 655 3349',
    email: 'jraphabodija@gmail.com',
    website: 'https://web.facebook.com/jraphahospitalibadan/?_rdc=1&_rdr',
    description:
      'At J-Rapha Hospital & Maternity, we believe healing starts with a smile and compassionate support. Our dedicated team is by your side, listening, guiding, and helping you navigate your healthcare journey.',
    city: 'Ibadan',
    state: 'Oyo',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Panacea Psychiatric Hospital Ibadan',
    address:
      'No 3 Bola Adeniji Street, 200285, Ibadan, Nigeria, Ibadan, Oyo State',
    phone: '',
    email: '',
    website: '',
    description: '',
    city: 'Ibadan',
    state: 'Oyo',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Oluwayomi Hospital',
    address: 'No 3, Oyeniwe Street, Olorombo, Basorun Ibadan',
    phone: '08028274462, 07054622122, 07013626615',
    email: ' info@oluwayomi.com',
    website: 'http://oluwayomi.com/home.php',
    description:
      'Oluwayomi Hospital is setup to provide qualitative healthcare at a very affordable rate to the Nigerian populace, backed up by appropriate technologies that make healthcare easily accessible, prompt and satisfactory, standing us out among others.',
    city: 'Ibadan',
    state: 'Oyo',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Zenith Care Hospital Ibadan',
    address:
      '126, Alaafin Avenue, opposite Bovas filling station, Oluyole Extension, Ibadan ',
    phone: '+234 706 671 7822, 08172298186',
    email: 'zenithhospitalibadan@yahoo.com',
    website: 'https://zenithcarehospitalibadan.com/',
    description:
      'We are a family hospital committed to providing comprehensive medical and health care services to all members of the family.',
    city: 'Ibadan',
    state: 'Oyo',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Bowen University Teaching Hospital',
    address:
      'Plot 4, Ilorin – Ogbomoso Road P. O. Box 15, Ogbomoso. Oyo State, Nigeria.',
    phone: '+234 803 410 2152, +234 806 277 0113',
    email: ' info@buth.edu.ng',
    website: 'https://www.buth.edu.ng/',
    description:
      'First-class christian Teaching Hospital marked by excellence and godliness for the training of doctors, nurses and other medical professionals.',
    city: 'Ogbomoso',
    state: 'Oyo',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'LAD Medical Centre',
    address:
      '1, LAD Hospital Street, Beside Police Barrack, Orita Challenge, Ibadan. Oyo State, Nigeria.',
    phone: '+234 805 920 2515, +234 703 984 7907',
    email: 'info@ladmedicalcentre.com',
    website: 'https://www.ladmedicalcentre.com/',
    description:
      'Looking for a place that feels like home? With Hospital Wards and professional services that will exceed your expectations, LAD Medical Centre has everything you may possibly need to keep you feel at home while you are being led to the path to good healthcare.',
    city: 'Ibadan',
    state: 'Oyo',
    image: '/images/hospitals/hospitals2.jpg',
  },
  // Ogun Hospitals
  {
    name: 'Federal Medical Centre Abeokuta',
    address: 'Idi-Aba, Abeokuta, Ogun State',
    phone: '+234 803 535 0221',
    email: 'info@fmcabeokuta.gov.ng',
    website: 'http://www.fmcabeokuta.gov.ng/',
    description:
      'A leading tertiary healthcare institution providing a wide range of medical services and training.',
    city: 'Abeokuta',
    state: 'Ogun',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Babcock University Teaching Hospital',
    address: 'Ilishan-Remo, Ogun State',
    phone: '+234 703 441 0043',
    email: 'buth@babcock.edu.ng',
    website: 'http://www.babcock.edu.ng/buth/',
    description:
      'A teaching hospital known for high-quality healthcare services and medical education.',
    city: 'Ilishan-Remo',
    state: 'Ogun',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Olabisi Onabanjo University Teaching Hospital',
    address: 'Sagamu, Ogun State',
    phone: '+234 802 350 1586',
    email: 'info@oouth.com',
    website: 'http://www.oouth.com/',
    description:
      'Provides tertiary healthcare services and serves as a training center for medical students.',
    city: 'Sagamu',
    state: 'Ogun',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Sacred Heart Hospital',
    address: 'Lantoro, Abeokuta, Ogun State',
    phone: '+234 703 428 4437',
    email: 'sacredheartlantoro@gmail.com',
    website: 'http://www.sacredhearthospitallantoro.org.ng/',
    description:
      'One of Nigeria’s oldest private hospitals, offering a range of healthcare services.',
    city: 'Abeokuta',
    state: 'Ogun',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Ijebu-Ode',
    address: 'Ijebu-Ode, Ogun State',
    phone: '+234 805 678 9123',
    email: '',
    website: '',
    description:
      'Provides general medical care to the residents of Ijebu-Ode and its environs.',
    city: 'Ijebu-Ode',
    state: 'Ogun',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Ota',
    address: 'Ota, Ogun State',
    phone: '+234 806 789 0345',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the community of Ota and surrounding areas.',
    city: 'Ota',
    state: 'Ogun',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'State Hospital Ilaro',
    address: 'Ilaro, Ogun State',
    phone: '+234 809 678 1234',
    email: '',
    website: '',
    description:
      'Provides medical services to the residents of Ilaro and nearby regions.',
    city: 'Ilaro',
    state: 'Ogun',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Ijebu-Igbo',
    address: 'Ijebu-Igbo, Ogun State',
    phone: '+234 803 456 7890',
    email: '',
    website: '',
    description:
      'Offers a variety of medical services to the people of Ijebu-Igbo and neighboring communities.',
    city: 'Ijebu-Igbo',
    state: 'Ogun',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Abeokuta',
    address: 'Abeokuta, Ogun State',
    phone: '+234 805 234 5678',
    email: '',
    website: '',
    description:
      'Provides comprehensive healthcare services to the residents of Abeokuta and its environs.',
    city: 'Abeokuta',
    state: 'Ogun',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Sagamu',
    address: 'Sagamu, Ogun State',
    phone: '+234 806 567 8901',
    email: '',
    website: '',
    description:
      'Offers medical care to the Sagamu community and surrounding areas.',
    city: 'Sagamu',
    state: 'Ogun',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Ondo Hospitals
  {
    name: 'University of Medical Sciences Teaching Hospital Complex',
    address: 'Laje Road, Ondo City, Ondo State',
    phone: '+234 810 123 4567',
    email: 'info@unimedthc.edu.ng',
    website: 'http://www.unimedthc.edu.ng/',
    description:
      'A tertiary healthcare facility affiliated with the University of Medical Sciences, Ondo.',
    city: 'Ondo City',
    state: 'Ondo',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Federal Medical Centre Owo',
    address: 'Owo, Ondo State',
    phone: '+234 803 456 7890',
    email: 'info@fmco.edu.ng',
    website: 'http://www.fmco.edu.ng/',
    description:
      'Provides comprehensive healthcare services and medical training to the community.',
    city: 'Owo',
    state: 'Ondo',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Mother and Child Hospital',
    address: 'Igbatoro Road, Akure, Ondo State',
    phone: '+234 807 123 4567',
    email: 'info@motherandchildhospital.com',
    website: 'http://www.motherandchildhospital.com/',
    description:
      'Specializes in maternal and child health services, offering quality care for mothers and children.',
    city: 'Akure',
    state: 'Ondo',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Akure',
    address: 'Hospital Road, Akure, Ondo State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Offers general medical care to the residents of Akure and surrounding areas.',
    city: 'Akure',
    state: 'Ondo',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Ikare',
    address: 'Ikare-Akoko, Ondo State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the Ikare-Akoko community and its environs.',
    city: 'Ikare-Akoko',
    state: 'Ondo',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'State Specialist Hospital Ondo',
    address: 'Ondo City, Ondo State',
    phone: '+234 809 234 5678',
    email: '',
    website: '',
    description:
      'Offers specialized medical services to the residents of Ondo City and neighboring communities.',
    city: 'Ondo City',
    state: 'Ondo',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Okitipupa',
    address: 'Okitipupa, Ondo State',
    phone: '+234 803 123 4567',
    email: '',
    website: '',
    description:
      'Provides general medical services to the people of Okitipupa and surrounding areas.',
    city: 'Okitipupa',
    state: 'Ondo',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Igbokoda',
    address: 'Igbokoda, Ondo State',
    phone: '+234 805 456 7890',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Igbokoda community and its environs.',
    city: 'Igbokoda',
    state: 'Ondo',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Ile-Oluji',
    address: 'Ile-Oluji, Ondo State',
    phone: '+234 806 123 4567',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Ile-Oluji and nearby regions.',
    city: 'Ile-Oluji',
    state: 'Ondo',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Idanre',
    address: 'Idanre, Ondo State',
    phone: '+234 807 234 5678',
    email: '',
    website: '',
    description:
      'Offers general medical services to the people of Idanre and its environs.',
    city: 'Idanre',
    state: 'Ondo',
    image: '/images/hospitals.jpg',
  },
  // Osun Hospitals
  {
    name: 'Obafemi Awolowo University Teaching Hospitals Complex',
    address: 'Ile-Ife, Osun State',
    phone: '+234 803 456 7890',
    email: 'info@oauife.edu.ng',
    website: 'http://www.oauife.edu.ng/',
    description:
      'A major teaching hospital affiliated with Obafemi Awolowo University, offering a range of healthcare services.',
    city: 'Ile-Ife',
    state: 'Osun',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'LAUTECH Teaching Hospital',
    address: 'Osogbo, Osun State',
    phone: '+234 805 678 9012',
    email: 'info@lautech.edu.ng',
    website: 'http://www.lautech.edu.ng/',
    description:
      'A teaching hospital providing quality medical care and training in collaboration with LAUTECH.',
    city: 'Osogbo',
    state: 'Osun',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'State Specialist Hospital Osogbo',
    address: 'Osogbo, Osun State',
    phone: '+234 806 123 4567',
    email: '',
    website: '',
    description:
      'Offers specialized healthcare services to the residents of Osogbo and its environs.',
    city: 'Osogbo',
    state: 'Osun',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'State Hospital Iwo',
    address: 'Iwo, Osun State',
    phone: '+234 807 234 5678',
    email: '',
    website: '',
    description:
      'Provides medical services to the people of Iwo and surrounding areas.',
    city: 'Iwo',
    state: 'Osun',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Ede',
    address: 'Ede, Osun State',
    phone: '+234 808 345 6789',
    email: '',
    website: '',
    description:
      'Offers general medical care to the residents of Ede and its environs.',
    city: 'Ede',
    state: 'Osun',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Ikirun',
    address: 'Ikirun, Osun State',
    phone: '+234 809 456 7890',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the Ikirun community and nearby regions.',
    city: 'Ikirun',
    state: 'Osun',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Ilesa',
    address: 'Ilesa, Osun State',
    phone: '+234 810 567 8901',
    email: '',
    website: '',
    description:
      'Offers medical care to the people of Ilesa and surrounding areas.',
    city: 'Ilesa',
    state: 'Osun',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Ipetu-Ijesha',
    address: 'Ipetu-Ijesha, Osun State',
    phone: '+234 811 678 9012',
    email: '',
    website: '',
    description:
      'Provides general medical services to the residents of Ipetu-Ijesha and its environs.',
    city: 'Ipetu-Ijesha',
    state: 'Osun',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Ile-Ife',
    address: 'Ile-Ife, Osun State',
    phone: '+234 812 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Ile-Ife community and surrounding regions.',
    city: 'Ile-Ife',
    state: 'Osun',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Ilesa East',
    address: 'Ilesa, Osun State',
    phone: '+234 813 890 1234',
    email: '',
    website: '',
    description:
      'Provides medical care to the people of Ilesa and nearby communities.',
    city: 'Ilesa',
    state: 'Osun',
    image: '/images/hospitals.jpg',
  },
  // Lagos Hospitals
  {
    name: 'St. Nicholas Hospital',
    address: '57 Campbell Street ,Lagos Island, Lagos, Nigeria.',
    phone: '02012718690, 02012718691, 02012718693',
    email: 'info@saintnicholashospital.com',
    website: 'https://saintnicholashospital.com/',
    description:
      'We are a 50 bed health facility that was established in 1968. Over the years, St. Nicholas Hospital has expanded to become a first class health care provider offering a wide range of services and the preferred referral medical facility for both local and international organizations.',
    city: 'Lagos Island',
    state: 'Lagos',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Ahmadu Bello University Teaching Hospital',
    address: 'Ishaga Road, Surulere, Lagos',
    phone: '+234 807 059 1395, +234 812 836 4824',
    email: 'info@luth.gov.ng',
    website: 'https://luth.gov.ng/',
    description:
      'The Lagos University Teaching Hospital is a foremost tertiary hospital in Nigeria , with over 950 admission beds, Forty-Six (46) Clinical Departments, Eighteen (18) Non-Clinical Departments and Outreaches at both Yaba and Pakoto. ',
    city: 'Surulere',
    state: 'Lagos',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Lagos State University Teaching Hospital',
    address: '1-5 Oba Akinjobi Way, Lagos, Nigeria.',
    phone: '+234 805 769 9802',
    email: 'enquiry@lasuth.org.ng',
    website: 'https://www.lasuth.org.ng/',
    description:
      'Lagos state university teaching hospital is a modest cottage hospital to provide health services for the people of Ikeja and its environment.',
    city: 'Lagos',
    state: 'Lagos',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Duchess International Hospital',
    address: '22A Joel Ogunnaike St, Ikeja GRA , Ikeja, Lagos, Nigeria',
    phone: '+234 700 103 1700',
    email: 'info@duchesshospital.com',
    website: 'https://duchesshospital.com/',
    description:
      'The DUCHESS International is a state-of-the-art 100-bed hospital delivering primary, secondary and tertiary healthcare services across a variety of specialist and subspecialty areas. ',
    city: 'Ikeja',
    state: 'Lagos',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'United Heart Hospital and Clinics-Ltd',
    address:
      '14C Kayode Abraham Street, off Ligali Ayorinde Street, Victoria Island, Lagos, Nigeria.',
    phone: '09030001144, 08182541000, 09039495598, 08091650888',
    email: '',
    website: 'https://www.unitedheartltd.com/',
    description:
      'At United Heart Hospital and Clinics, we offer comprehensive heart health services, including routine check-ups and screenings. ',
    city: 'Victoria Island',
    state: 'Lagos',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Lagos Island Maternity Hospital',
    address: '10 Campbell St, Lagos Island, Lagos, Nigeria.',
    phone: '+234 807 559 3743, +234 8075593741',
    email: 'info@islandmaternity.com',
    website: 'https://www.islandmaternity.com/',
    description:
      'Lagos Island Maternity Hospital, Campbell Street, Lagos owned by Lagos State Government, is a specialist Hospital that caters for all aspects of Obstetrics and Gynaecological problems.',
    city: 'Lagos Island',
    state: 'Lagos',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Reddington Hospital',
    address: '12 Idowu Martins St, Victoria Island, Lagos, Nigeria.',
    phone: '09165359769, 012715340 - 4',
    email: 'info@reddingtonhospital.com',
    website: 'https://reddingtonhospital.com/',
    description:
      'Reddington is a 5-star, one-stop facility providing comprehensive solutions to your healthcare needs. ',
    city: 'Victoria Island',
    state: 'Lagos',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Lagoon Hospitals',
    address: '8 Marine Rd, Apapa, Lagos, Nigeria.',
    phone: '07080609000',
    email: 'livemorelife@lagoonhospitals.com',
    website: 'https://www.lagoonhospitals.com/',
    description:
      'We are a consistently patient-first, world-class healthcare service provider in Lagos and the leading Hospital in Nigeria.',
    city: 'Apapa',
    state: 'Lagos',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Abiodun Falade Hospital',
    address:
      'No 53, Ajiran Road, beside fellowship baptist Church, Agungi, Lekki, Lagos, Nigeria',
    phone: '+234 815 497 0764',
    email: 'info@abiodunfalade.com',
    website: 'https://www.abiodunfalade.com/hospitals/',
    description:
      ' We specialize in Women and Child health- most especially fibroid treatments.',
    city: 'Lekki',
    state: 'Lagos',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'South Shore Women and Children’s Hospital',
    address: '6b Goriola Street Off, Adeola Odeku Street, VI, Lagos, Nigeria',
    phone: '+234 (90) 697 12277, +234 (80) 746 17023',
    email: 'customercare@southshorewch.com',
    website: 'https://southshorewch.com/',
    description:
      'We provide the highest possible standards of health care services to Women and Children, creating a better future.',
    city: 'Victoria Island',
    state: 'Lagos',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Marigold Hospital',
    address: '12/14 Adeniyi Adefioye Street, Kilo, Surulere, Lagos',
    phone: '08113552222, 08182990999',
    email: '',
    website: 'https://marigoldhospital.ng/',
    description:
      'Marigold Hospital and Critical Care Centre is a 25-bed multi-specialty acute care center that provides a wide variety of specialized surgical and acute care services.',
    city: 'Surulere',
    state: 'Lagos',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Vedic Lifecare Hospital',
    address: 'Block 105, 6 Olabanji Olajide St, Lekki Phase 1 , Lagos, Nigeria',
    phone: '+2347084008982',
    email: 'info@vediclifecare.com',
    website: 'https://www.vediclifecare.com/',
    description:
      'Doctors at Vedic collaborate across specialities in the hospital to provide comprehensive care tailored specifically to the needs of every patient. ',
    city: 'Lekki',
    state: 'Lagos',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Etta Atlantic Memorial Hospital',
    address: '22 Abioro Street, Ikate, Lekki, Lagos, Nigeria',
    phone: '+234 808 373 4008',
    email: 'hello@ettaatlantic.com',
    website: 'https://www.ettaatlantic.com/',
    description:
      'Etta-Atlantic Memorial Hospital Lekki Lagos has the best medical specialists on ground with impeccable track records. We pay attention to standards and follow best practices.',
    city: 'Lekki',
    state: 'Lagos',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Doren Specialist Hospital',
    address:
      '1, OsaPaul Street [formally Kemfat Road], Thomas Estate, Ajah, Lagos, Nigeria',
    phone: '+234 802 306 2100',
    email: 'adminservices@dorenspecialisthospital.com',
    website: 'https://dorenspecialisthospital.com/',
    description:
      'Delivery of Qualitative, Affordable and Prompt Healthcare Services to the Society at large in a Clean, Polite and Convivial Environment.',
    city: 'Ajah',
    state: 'Lagos',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Pediatric Partners Hospital',
    address: '314a Akin Ogunlewe Rd, Victoria Island, Lagos, Nigeria.',
    phone: '09082066695',
    email: '',
    website: 'https://pediatricpartnersng.com/',
    description:
      'Pediatric Partners Hospital is a pediatric outpatient practice owned by American Trained Board Certified Pediatricians located in Lagos, Nigeria. At Pediatric Partners Hospital, we offer a wide range of medical services for children from newborn to adolescents, delivered by leading consultant pediatricians and the best team of healthcare professionals.',
    city: 'Victoria Island',
    state: 'Lagos',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Dove Hospital',
    address: 'Adewale Bus Stop, Badore, Ajah, Lagos, Nigeria.',
    phone: '+234 817 819 0797,  08188913997',
    email: 'Dove.hospital@yahoo.com',
    website: 'http://dovehospital.com/',
    description:
      'Dove Hospital has Consultants in various departments of Medicine.',
    city: 'Ajah',
    state: 'Lagos',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Abuja Hospitals
  {
    name: 'Abiodun Falade Hospital',
    address:
      'Plot 3, 64 Crescent Gate B, By Glomide Supermarket shopping center, 6th Avenue, Gwarinpa, Abuja',
    phone: '+234 815 497 0764',
    email: 'info@abiodunfalade.com',
    website: 'https://www.abiodunfalade.com/hospitals/',
    description:
      'We specialize in Women and Child health- most especially fibroid treatments.',
    city: 'Abuja',
    state: 'FCT',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'National Hospital',
    address:
      'Plot 132 Central Business District,Garki, Abuja, Federal Capital Territory',
    phone: '08097520012, 09030097889',
    email: 'contact@nationalhospital.gov.ng',
    website: 'https://nationalhospital.gov.ng/',
    description:
      'National Hospital Abuja is a 200-bedded hospital that provides both general and specialist medical services to patients.',
    city: 'Abuja',
    state: 'FCT',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Dr. Hassans Hospital',
    address:
      'No 5 iller Crescent, Off Katsina Ala Street, Maitama, Abuja, FCT, Nigeria',
    phone: '+234 806 016 4004',
    email: '',
    website: 'http://drhassanshospital.com/',
    description:
      'Being the pioneers in preventive health care, we at Dr. Hassan’s Hospital offer a variety of comprehensive health checks like full body checkup & other health checkup packages to provide a complete health status.',
    city: 'Abuja',
    state: 'FCT',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'The Limi Hospital Ltd.',
    address: 'Beside Ndic, Abuja, Federal Capital Territory',
    phone: '+234 809 016 0175',
    email: 'info@limihospital.org',
    website: 'https://www.limihospital.org/',
    description:
      'The Limi Hospital, where excellence in healthcare meets a heartfelt commitment to your well-being, stands as a cornerstone of medical care in our community.',
    city: 'Abuja',
    state: 'FCT',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Garki Hospital',
    address:
      'Tafawa Balewa Way, Area 8, Garki, Abuja, Federal Capital Territory',
    phone: '+234 809 020 8418',
    email: '',
    website: 'https://garkihospital.com/',
    description:
      'Medical service center in Abuja for health services on obstetrics, gynecology and general health care services. ',
    city: 'Abuja',
    state: 'FCT',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Cytecare Cancer Hospitals',
    address:
      'SoCor Professional Solutions,No 11, Dakala Street, Off Parakou Crescent, Wuse II, FCT, Abuja',
    phone: '+234 817 908 6602',
    email: 'enquiry@cytecare.com',
    website: 'https://cytecare.com/international-patients/',
    description:
      'Cytecare Cancer Hospitals is a comprehensive cancer care hospital in Abuja, Nigeria. We provide the best cancer treatment in Nigeria.',
    city: 'Abuja',
    state: 'FCT',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Deda Hospital',
    address: 'Plot 206 Zone B02 Abuja Street, Abuja, Federal Capital Territory',
    phone: '+234 818 422 7707 , +234-9071139498',
    email: 'info@dedahospital.com',
    website: 'https://www.dedahospital.com/contact-us/',
    description:
      'DEDA Hospital is a leading healthcare provision facility with a history of successful health outcome for our clients since 2012.',
    city: 'Abuja',
    state: 'FCT',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Kelina Hospital',
    address:
      ': 3rd Avenue, by 34 Crescent, Gwarinpa, Abuja, Federal Capital Territory.',
    phone: '+2348033644644, +2347016837070',
    email: 'kelina@kelinahospital.com',
    website: 'https://www.kelinahospital.com/',
    description:
      'Kelina Hospital is an Endoscopic and Laser Surgery specialist hospital with focus on Minimal Access Surgeries.',
    city: 'Abuja',
    state: 'FCT',
    image: '/images/hospitals.jpg',
  },
  // Kwara Hospitals
  {
    name: 'University of Ilorin Teaching Hospital',
    address: 'New General Hospital Road, Ilorin, Kwara State',
    phone: '+234 803 745 0011',
    email: 'info@uithilorin.com',
    website: 'http://www.uithilorin.com/',
    description:
      'A leading teaching hospital providing a wide range of healthcare services and training medical professionals.',
    city: 'Ilorin',
    state: 'Kwara',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Kwara State Specialist Hospital',
    address: 'Sobi Road, Ilorin, Kwara State',
    phone: '+234 806 520 0000',
    email: 'specialisthospkwara@gmail.com',
    website: '',
    description:
      'Offers specialist medical care in various fields, with experienced staff and modern facilities.',
    city: 'Ilorin',
    state: 'Kwara',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Ilorin',
    address: 'Asa Dam Road, Ilorin, Kwara State',
    phone: '+234 703 456 7890',
    email: '',
    website: '',
    description:
      'Provides general healthcare services to the people of Ilorin and its environs.',
    city: 'Ilorin',
    state: 'Kwara',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Offa Specialist Hospital',
    address: 'Offa, Kwara State',
    phone: '+234 806 345 6789',
    email: 'offaspecialisthospital@gmail.com',
    website: '',
    description:
      'A specialist hospital offering quality medical services to the people of Offa and surrounding areas.',
    city: 'Offa',
    state: 'Kwara',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Omu-Aran',
    address: 'Omu-Aran, Kwara State',
    phone: '+234 705 567 8901',
    email: '',
    website: '',
    description:
      'Offers comprehensive healthcare services to the Omu-Aran community.',
    city: 'Omu-Aran',
    state: 'Kwara',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Ajase-Ipo General Hospital',
    address: 'Ajase-Ipo, Kwara State',
    phone: '+234 807 678 9012',
    email: '',
    website: '',
    description:
      'Provides general medical care to the residents of Ajase-Ipo and neighboring areas.',
    city: 'Ajase-Ipo',
    state: 'Kwara',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Lafiagi General Hospital',
    address: 'Lafiagi, Kwara State',
    phone: '+234 808 789 0123',
    email: '',
    website: '',
    description:
      'A general hospital dedicated to providing healthcare services to the Lafiagi community.',
    city: 'Lafiagi',
    state: 'Kwara',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Patigi General Hospital',
    address: 'Patigi, Kwara State',
    phone: '+234 809 890 1234',
    email: '',
    website: '',
    description:
      'Offers a range of healthcare services to the people of Patigi and its environs.',
    city: 'Patigi',
    state: 'Kwara',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Kaima General Hospital',
    address: 'Kaima, Kwara State',
    phone: '+234 810 901 2345',
    email: '',
    website: '',
    description:
      'Provides quality medical care to the residents of Kaima and surrounding communities.',
    city: 'Kaima',
    state: 'Kwara',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Share General Hospital',
    address: 'Share, Kwara State',
    phone: '+234 811 012 3456',
    email: '',
    website: '',
    description:
      'A general hospital offering healthcare services to the Share community.',
    city: 'Share',
    state: 'Kwara',
    image: '/images/hospitals.jpg',
  },
  // Kaduna State
  {
    name: 'Barau Dikko Teaching Hospital',
    address: 'Independent Way, Kaduna, Kaduna State',
    phone: '+234 814 725 0000',
    email: 'info@bdthk.com',
    website: 'http://www.bdthk.com/',
    description:
      'A teaching hospital affiliated with Kaduna State University, offering a variety of medical services.',
    city: 'Kaduna',
    state: 'Kaduna',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'St. Gerald Catholic Hospital',
    address: 'Kachia Road, Kakuri, Kaduna, Kaduna State',
    phone: '+234 803 456 7890',
    email: 'stgeraldhospital@gmail.com',
    website: '',
    description:
      'A mission hospital providing comprehensive healthcare services with a focus on compassionate care.',
    city: 'Kaduna',
    state: 'Kaduna',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Gambo Sawaba General Hospital',
    address: 'Zaria, Kaduna State',
    phone: '+234 706 123 4567',
    email: '',
    website: '',
    description:
      'A general hospital serving the Zaria community with a variety of healthcare services.',
    city: 'Zaria',
    state: 'Kaduna',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Turai Yar’Adua Maternal and Children Hospital',
    address: 'Murtala Square, Kaduna, Kaduna State',
    phone: '+234 805 567 8901',
    email: 'info@turaimhospital.com',
    website: 'http://www.turaimhospital.com/',
    description:
      'Specializes in maternal and child healthcare, providing quality services to mothers and children.',
    city: 'Kaduna',
    state: 'Kaduna',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Kafanchan',
    address: 'Kafanchan, Kaduna State',
    phone: '+234 703 678 9012',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the residents of Kafanchan and its environs.',
    city: 'Kafanchan',
    state: 'Kaduna',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Ahmadu Bello University Teaching Hospital',
    address: 'Zaria, Kaduna State',
    phone: '+234 809 012 3456',
    email: 'contact@abuth.org.ng',
    website: 'http://www.abuth.org.ng/',
    description:
      'A premier teaching hospital in Nigeria, offering a wide range of specialized medical services.',
    city: 'Zaria',
    state: 'Kaduna',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Giwa General Hospital',
    address: 'Giwa, Kaduna State',
    phone: '+234 803 123 4567',
    email: '',
    website: '',
    description:
      'Provides general medical care to the people of Giwa and surrounding areas.',
    city: 'Giwa',
    state: 'Kaduna',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Saminaka',
    address: 'Saminaka, Kaduna State',
    phone: '+234 705 234 5678',
    email: '',
    website: '',
    description:
      'A general hospital offering healthcare services to the Saminaka community.',
    city: 'Saminaka',
    state: 'Kaduna',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Birnin Gwari',
    address: 'Birnin Gwari, Kaduna State',
    phone: '+234 812 345 6789',
    email: '',
    website: '',
    description:
      'Provides quality healthcare services to the residents of Birnin Gwari and environs.',
    city: 'Birnin Gwari',
    state: 'Kaduna',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Zonkwa',
    address: 'Zonkwa, Kaduna State',
    phone: '+234 807 456 7890',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Zonkwa community and neighboring areas.',
    city: 'Zonkwa',
    state: 'Kaduna',
    image: '/images/hospitals.jpg',
  },
  // Kano State
  {
    name: 'Aminu Kano Teaching Hospital',
    address: 'Zaria Road, Kano, Kano State',
    phone: '+234 803 456 7890',
    email: 'info@akth.org.ng',
    website: 'http://www.akth.org.ng/',
    description:
      'A leading teaching hospital in Northern Nigeria, providing comprehensive medical services and training.',
    city: 'Kano',
    state: 'Kano',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Murtala Mohammed Specialist Hospital',
    address: 'No. 1 Sabo Bakin Zuwo Road, Kano, Kano State',
    phone: '+234 802 123 4567',
    email: '',
    website: '',
    description:
      'A specialist hospital offering a variety of healthcare services with modern facilities.',
    city: 'Kano',
    state: 'Kano',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Muhammadu Abdullahi Wase Specialist Hospital',
    address: 'Nassarawa GRA, Kano, Kano State',
    phone: '+234 708 901 2345',
    email: '',
    website: '',
    description:
      'Specializes in various medical fields, providing quality care to patients.',
    city: 'Kano',
    state: 'Kano',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Sir Muhammad Sanusi Specialist Hospital',
    address: 'Kofar Nassarawa, Kano, Kano State',
    phone: '+234 807 890 1234',
    email: '',
    website: '',
    description:
      'Offers specialized medical care to the people of Kano and its environs.',
    city: 'Kano',
    state: 'Kano',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Dala Orthopaedic Hospital',
    address: 'Gwammaja, Kano, Kano State',
    phone: '+234 809 012 3456',
    email: 'info@dalaorthopaedic.org',
    website: 'http://www.dalaorthopaedic.org/',
    description:
      'Specializes in orthopaedic care, providing comprehensive services for bone and joint health.',
    city: 'Kano',
    state: 'Kano',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Wudil General Hospital',
    address: 'Wudil, Kano State',
    phone: '+234 805 234 5678',
    email: '',
    website: '',
    description:
      'Provides general healthcare services to the residents of Wudil and surrounding areas.',
    city: 'Wudil',
    state: 'Kano',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'Bichi General Hospital',
    address: 'Bichi, Kano State',
    phone: '+234 706 345 6789',
    email: '',
    website: '',
    description:
      'Offers general medical care to the Bichi community and its environs.',
    city: 'Bichi',
    state: 'Kano',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Gaya',
    address: 'Gaya, Kano State',
    phone: '+234 808 456 7890',
    email: '',
    website: '',
    description:
      'Provides quality healthcare services to the residents of Gaya and neighboring areas.',
    city: 'Gaya',
    state: 'Kano',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Tiga General Hospital',
    address: 'Tiga, Kano State',
    phone: '+234 807 567 8901',
    email: '',
    website: '',
    description:
      'A general hospital offering healthcare services to the Tiga community.',
    city: 'Tiga',
    state: 'Kano',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Rano General Hospital',
    address: 'Rano, Kano State',
    phone: '+234 703 678 9012',
    email: '',
    website: '',
    description:
      'Provides comprehensive medical services to the people of Rano and its environs.',
    city: 'Rano',
    state: 'Kano',
    image: '/images/hospitals.jpg',
  },
  // Kebbi Hospitals
  {
    name: 'Sir Yahaya Memorial Hospital',
    address: 'Birnin Kebbi, Kebbi State',
    phone: '+234 802 345 6789',
    email: '',
    website: '',
    description:
      'A memorial hospital offering a variety of medical services to the residents of Birnin Kebbi.',
    city: 'Birnin Kebbi',
    state: 'Kebbi',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Federal Medical Centre Birnin Kebbi',
    address: 'Birnin Kebbi, Kebbi State',
    phone: '+234 803 456 7890',
    email: 'info@fmcbinin.org',
    website: 'http://www.fmcbinin.org/',
    description:
      'A federal medical center providing specialized and general healthcare services.',
    city: 'Birnin Kebbi',
    state: 'Kebbi',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Zuru',
    address: 'Zuru, Kebbi State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Offers general medical care to the residents of Zuru and its environs.',
    city: 'Zuru',
    state: 'Kebbi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Argungu',
    address: 'Argungu, Kebbi State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Provides quality healthcare services to the people of Argungu and surrounding areas.',
    city: 'Argungu',
    state: 'Kebbi',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Yauri',
    address: 'Yauri, Kebbi State',
    phone: '+234 809 901 2345',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the residents of Yauri and neighboring areas.',
    city: 'Yauri',
    state: 'Kebbi',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Koko',
    address: 'Koko, Kebbi State',
    phone: '+234 702 345 6789',
    email: '',
    website: '',
    description:
      'Provides general medical services to the Koko community and its environs.',
    city: 'Koko',
    state: 'Kebbi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Jega',
    address: 'Jega, Kebbi State',
    phone: '+234 701 234 5678',
    email: '',
    website: '',
    description:
      'A general hospital offering healthcare services to the residents of Jega.',
    city: 'Jega',
    state: 'Kebbi',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Bunza',
    address: 'Bunza, Kebbi State',
    phone: '+234 703 456 7890',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the Bunza community and surrounding areas.',
    city: 'Bunza',
    state: 'Kebbi',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Danko Wasagu',
    address: 'Danko Wasagu, Kebbi State',
    phone: '+234 807 678 9012',
    email: '',
    website: '',
    description:
      'Offers comprehensive medical care to the residents of Danko Wasagu.',
    city: 'Danko Wasagu',
    state: 'Kebbi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Aliero',
    address: 'Aliero, Kebbi State',
    phone: '+234 808 789 0123',
    email: '',
    website: '',
    description:
      'Provides quality healthcare services to the people of Aliero and its environs.',
    city: 'Aliero',
    state: 'Kebbi',
    image: '/images/hospitals/hospitals3.jpg',
  },
  // Katsina Hospitals
  {
    name: 'Federal Medical Centre Katsina',
    address: 'Jibiya Road, Katsina, Katsina State',
    phone: '+234 803 456 7890',
    email: 'info@fmckatsina.gov.ng',
    website: 'http://www.fmckatsina.gov.ng/',
    description:
      'Provides tertiary healthcare services and training for medical professionals.',
    city: 'Katsina',
    state: 'Katsina',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Funtua',
    address: 'Funtua, Katsina State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Offers a variety of healthcare services to the residents of Funtua and its environs.',
    city: 'Funtua',
    state: 'Katsina',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Daura',
    address: 'Daura, Katsina State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Provides comprehensive medical care to the people of Daura and surrounding areas.',
    city: 'Daura',
    state: 'Katsina',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Turai Yar’Adua Maternal and Children Hospital',
    address: 'Katsina, Katsina State',
    phone: '+234 808 901 2345',
    email: '',
    website: '',
    description:
      'Specializes in maternal and child healthcare, offering a wide range of services.',
    city: 'Katsina',
    state: 'Katsina',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Malumfashi',
    address: 'Malumfashi, Katsina State',
    phone: '+234 802 345 6789',
    email: '',
    website: '',
    description:
      'Offers general medical services to the residents of Malumfashi and its environs.',
    city: 'Malumfashi',
    state: 'Katsina',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Dutsin-Ma',
    address: 'Dutsin-Ma, Katsina State',
    phone: '+234 701 234 5678',
    email: '',
    website: '',
    description:
      'Provides quality healthcare services to the Dutsin-Ma community and neighboring areas.',
    city: 'Dutsin-Ma',
    state: 'Katsina',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Kankia',
    address: 'Kankia, Katsina State',
    phone: '+234 703 456 7890',
    email: '',
    website: '',
    description:
      'A general hospital serving the Kankia community with various healthcare services.',
    city: 'Kankia',
    state: 'Katsina',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Jibia',
    address: 'Jibia, Katsina State',
    phone: '+234 809 678 9012',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the residents of Jibia and its environs.',
    city: 'Jibia',
    state: 'Katsina',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Mani',
    address: 'Mani, Katsina State',
    phone: '+234 706 789 0123',
    email: '',
    website: '',
    description:
      'Offers comprehensive medical care to the people of Mani and surrounding areas.',
    city: 'Mani',
    state: 'Katsina',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Bakori',
    address: 'Bakori, Katsina State',
    phone: '+234 807 901 2345',
    email: '',
    website: '',
    description:
      'A general hospital providing healthcare services to the Bakori community.',
    city: 'Bakori',
    state: 'Katsina',
    image: '/images/hospitals.jpg',
  },
  // Kogi Hospitals
  {
    name: 'Federal Medical Centre Lokoja',
    address: 'Lokoja, Kogi State',
    phone: '+234 812 345 6789',
    email: 'info@fmclokoja.gov.ng',
    website: 'http://www.fmclokoja.gov.ng/',
    description:
      'A federal medical center offering a wide range of healthcare services and medical training.',
    city: 'Lokoja',
    state: 'Kogi',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Kogi State Specialist Hospital',
    address: 'Lokoja, Kogi State',
    phone: '+234 803 456 7890',
    email: '',
    website: '',
    description:
      'Specializes in providing advanced medical care and specialist services.',
    city: 'Lokoja',
    state: 'Kogi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Okene',
    address: 'Okene, Kogi State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the residents of Okene and its environs.',
    city: 'Okene',
    state: 'Kogi',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Kabba',
    address: 'Kabba, Kogi State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers a variety of medical services to the people of Kabba and neighboring communities.',
    city: 'Kabba',
    state: 'Kogi',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Idah',
    address: 'Idah, Kogi State',
    phone: '+234 809 901 2345',
    email: '',
    website: '',
    description:
      'Provides comprehensive healthcare services to the residents of Idah and surrounding areas.',
    city: 'Idah',
    state: 'Kogi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Ankpa',
    address: 'Ankpa, Kogi State',
    phone: '+234 802 345 6789',
    email: '',
    website: '',
    description:
      'Offers general medical care to the Ankpa community and its environs.',
    city: 'Ankpa',
    state: 'Kogi',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Ajaokuta',
    address: 'Ajaokuta, Kogi State',
    phone: '+234 803 456 7890',
    email: '',
    website: '',
    description:
      'Provides quality healthcare services to the people of Ajaokuta and neighboring areas.',
    city: 'Ajaokuta',
    state: 'Kogi',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Dekina',
    address: 'Dekina, Kogi State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Offers comprehensive medical services to the residents of Dekina and its environs.',
    city: 'Dekina',
    state: 'Kogi',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Bassa',
    address: 'Bassa, Kogi State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Provides healthcare services to the Bassa community and surrounding areas.',
    city: 'Bassa',
    state: 'Kogi',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Isanlu',
    address: 'Isanlu, Kogi State',
    phone: '+234 809 901 2345',
    email: '',
    website: '',
    description:
      'Offers a range of medical services to the residents of Isanlu and neighboring communities.',
    city: 'Isanlu',
    state: 'Kogi',
    image: '/images/hospitals/hospitals1.jpg',
  },
  // Plateau Hospitals
  {
    name: 'Jos University Teaching Hospital',
    address: 'Jos, Plateau State',
    phone: '+234 703 123 4567',
    email: 'info@jut.edu.ng',
    website: 'http://www.jut.edu.ng/',
    description:
      'A major teaching hospital offering comprehensive healthcare services and medical education.',
    city: 'Jos',
    state: 'Plateau',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Plateau State Specialist Hospital',
    address: 'Jos, Plateau State',
    phone: '+234 802 345 6789',
    email: 'info@plateaustatespecialisthospital.gov.ng',
    website: 'http://www.plateaustatespecialisthospital.gov.ng/',
    description:
      'Provides specialized medical services and general healthcare to the Plateau community.',
    city: 'Jos',
    state: 'Plateau',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Pankshin',
    address: 'Pankshin, Plateau State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Pankshin community and its surroundings.',
    city: 'Pankshin',
    state: 'Plateau',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Shendam',
    address: 'Shendam, Plateau State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to residents of Shendam and neighboring regions.',
    city: 'Shendam',
    state: 'Plateau',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Barkin Ladi',
    address: 'Barkin Ladi, Plateau State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Barkin Ladi community and surrounding areas.',
    city: 'Barkin Ladi',
    state: 'Plateau',
    image: '/images/hospitals.jpg',
  },
  // Sokoto Hospitals
  {
    name: 'Sokoto State Specialist Hospital',
    address: 'Sokoto, Sokoto State',
    phone: '+234 703 123 4567',
    email: 'info@sokotostatespecialisthospital.gov.ng',
    website: 'http://www.sokotostatespecialisthospital.gov.ng/',
    description:
      'A major hospital providing specialized medical services and general healthcare in Sokoto State.',
    city: 'Sokoto',
    state: 'Sokoto',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'Federal Medical Centre Sokoto',
    address: 'Sokoto, Sokoto State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-sokoto.gov.ng',
    website: 'http://www.fmc-sokoto.gov.ng/',
    description:
      'Provides a range of medical services including emergency care and specialized treatments.',
    city: 'Sokoto',
    state: 'Sokoto',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Wamakko',
    address: 'Wamakko, Sokoto State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Wamakko community and its surroundings.',
    city: 'Wamakko',
    state: 'Sokoto',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Tambuwal',
    address: 'Tambuwal, Sokoto State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Tambuwal and neighboring areas.',
    city: 'Tambuwal',
    state: 'Sokoto',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Binji',
    address: 'Binji, Sokoto State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Binji community and surrounding regions.',
    city: 'Binji',
    state: 'Sokoto',
    image: '/images/hospitals/hospitals1.jpg',
  },
  // Taraba Hospitals
  {
    name: 'Taraba State University Teaching Hospital',
    address: 'Jalingo, Taraba State',
    phone: '+234 703 123 4567',
    email: 'info@tsuth.edu.ng',
    website: 'http://www.tsuth.edu.ng/',
    description:
      'A major teaching hospital offering comprehensive healthcare services and medical education in Taraba State.',
    city: 'Jalingo',
    state: 'Taraba',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'Federal Medical Centre Jalingo',
    address: 'Jalingo, Taraba State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-jalingo.gov.ng',
    website: 'http://www.fmc-jalingo.gov.ng/',
    description:
      'Provides a range of medical services including emergency care and specialized treatments.',
    city: 'Jalingo',
    state: 'Taraba',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Wukari',
    address: 'Wukari, Taraba State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Wukari community and its surroundings.',
    city: 'Wukari',
    state: 'Taraba',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'General Hospital Takum',
    address: 'Takum, Taraba State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Takum and neighboring areas.',
    city: 'Takum',
    state: 'Taraba',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Bali',
    address: 'Bali, Taraba State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Bali community and surrounding regions.',
    city: 'Bali',
    state: 'Taraba',
    image: '/images/hospitals/hospitals1.jpg',
  },
  // Yobe Hospitals
  {
    name: 'Yobe State University Teaching Hospital',
    address: 'Damaturu, Yobe State',
    phone: '+234 703 123 4567',
    email: 'info@ysuth.edu.ng',
    website: 'http://www.ysuth.edu.ng/',
    description:
      'A key teaching hospital offering comprehensive healthcare services and medical training in Yobe State.',
    city: 'Damaturu',
    state: 'Yobe',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Federal Medical Centre Nguru',
    address: 'Nguru, Yobe State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-nguru.gov.ng',
    website: 'http://www.fmc-nguru.gov.ng/',
    description:
      'Provides a range of medical services including emergency care and specialized treatments.',
    city: 'Nguru',
    state: 'Yobe',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Potiskum',
    address: 'Potiskum, Yobe State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Potiskum community and its surroundings.',
    city: 'Potiskum',
    state: 'Yobe',
    image: '/images/hospitals/hospitals1.jpg',
  },
  {
    name: 'General Hospital Gashua',
    address: 'Gashua, Yobe State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Gashua and neighboring areas.',
    city: 'Gashua',
    state: 'Yobe',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Buni Yadi',
    address: 'Buni Yadi, Yobe State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Buni Yadi community and surrounding regions.',
    city: 'Buni Yadi',
    state: 'Yobe',
    image: '/images/hospitals.jpg',
  },
  // Zamfara Hospitals
  {
    name: 'Zamfara State Specialist Hospital',
    address: 'Gusau, Zamfara State',
    phone: '+234 703 123 4567',
    email: 'info@zamfara.gov.ng',
    website: 'http://www.zamfara.gov.ng/',
    description:
      'A major hospital providing specialized medical services and general healthcare in Zamfara State.',
    city: 'Gusau',
    state: 'Zamfara',
    image: '/images/hospitals/hospitals3.jpg',
  },
  {
    name: 'Federal Medical Centre Gusau',
    address: 'Gusau, Zamfara State',
    phone: '+234 802 345 6789',
    email: 'info@fmc-gusau.gov.ng',
    website: 'http://www.fmc-gusau.gov.ng/',
    description:
      'Provides a range of medical services including emergency care and specialized treatments.',
    city: 'Gusau',
    state: 'Zamfara',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Anka',
    address: 'Anka, Zamfara State',
    phone: '+234 804 567 8901',
    email: '',
    website: '',
    description:
      'Offers general healthcare services to the Anka community and its surroundings.',
    city: 'Anka',
    state: 'Zamfara',
    image: '/images/hospitals/hospitals2.jpg',
  },
  {
    name: 'General Hospital Talata Mafara',
    address: 'Talata Mafara, Zamfara State',
    phone: '+234 805 678 9012',
    email: '',
    website: '',
    description:
      'Provides medical care to the residents of Talata Mafara and neighboring areas.',
    city: 'Talata Mafara',
    state: 'Zamfara',
    image: '/images/hospitals.jpg',
  },
  {
    name: 'General Hospital Shinkafi',
    address: 'Shinkafi, Zamfara State',
    phone: '+234 806 789 0123',
    email: '',
    website: '',
    description:
      'Offers healthcare services to the Shinkafi community and surrounding regions.',
    city: 'Shinkafi',
    state: 'Zamfara',
    image: '/images/hospitals/hospitals1.jpg',
  },
];
var addHospitals = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var _i, hospitals_1, hospital, docRef, e_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          (_i = 0), (hospitals_1 = hospitals);
          _a.label = 1;
        case 1:
          if (!(_i < hospitals_1.length)) return [3 /*break*/, 6];
          hospital = hospitals_1[_i];
          _a.label = 2;
        case 2:
          _a.trys.push([2, 4, , 5]);
          return [4 /*yield*/, addDoc(collection(db, 'hospitals'), hospital)];
        case 3:
          docRef = _a.sent();
          console.log('Hospital added with ID:', docRef.id);
          return [3 /*break*/, 5];
        case 4:
          e_1 = _a.sent();
          console.error('Error adding hospital:', e_1);
          return [3 /*break*/, 5];
        case 5:
          _i++;
          return [3 /*break*/, 1];
        case 6:
          return [2 /*return*/];
      }
    });
  });
};
addHospitals();

export interface ContactInfo {

  phone:string;


  email?:string;


  address:string;


  workingHours?:string;


  telegram?:string;


  whatsapp?:string;


  coordinates?: {

    latitude:number;

    longitude:number;

  };

}
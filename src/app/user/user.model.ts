export class User {
    firstName : string;
    lastName : string;
    dob:Date;
    phone : Array<Phone>;
    address : Address;
    
}

export class Address{
    street1 : string;
    street2 : string;
    street3 : string;
    country:string;
    state:string;
    zipCode : string;
}

export class Phone{
    country : string;
    number : string;
    type : string;
}

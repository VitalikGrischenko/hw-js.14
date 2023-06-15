let apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"]
  };

  apartment.owner = {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com"
  };

  let aptRating = apartment.rating;
let aptDescr = apartment.descr;
let aptPrice = apartment.price;
let aptTags = apartment.tags;

let ownerName = apartment.owner.name;
let ownerPhone = apartment.owner.phone;
let ownerEmail = apartment.owner.email;
let numberOfTags = apartment.tags.length;
let firstTag = apartment.tags[0];
let lastTag = apartment.tags[apartment.tags.length - 1];

let aptRating2 = apartment["rating"];
let aptDescr2 = apartment["descr"];
let aptPrice2 = apartment["price"];
let aptTags2 = apartment["tags"];

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston"
};
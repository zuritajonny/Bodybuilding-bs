affirm.checkout({
  merchant: {
    user_confirmation_url: "https://merchantsite.com/confirm",
    user_cancel_url: "https://merchantsite.com/cancel",
    public_api_key: "Y88RIGNFL9FMHB4I",
    user_confirmation_url_action: "POST",
    name: "Your Customer-Facing Merchant Name",
  },
  shipping: {
    name: {
      first: "Joe",
      last: "Doe",
    },
    address: {
      line1: "633 Folsom St",
      line2: "Floor 7",
      city: "San Francisco",
      state: "CA",
      zipcode: "94107",
      country: "USA",
    },
    phone_number: "4153334567",
    email: "joedoe@123fakestreet.com",
  },
  billing: {
    name: {
      first: "Joe",
      last: "Doe",
    },
    address: {
      line1: "633 Folsom St",
      line2: "Floor 7",
      city: "San Francisco",
      state: "CA",
      zipcode: "94107",
      country: "USA",
    },
    phone_number: "4153334567",
    email: "joedoe@123fakestreet.com",
  },
  items: [
    {
      display_name: "Awesome Pants",
      sku: "ABC-123",
      unit_price: 10000,
      qty: 3,
      item_image_url: "http://merchantsite.com/images/awesome-pants.jpg",
      item_url: "http://merchantsite.com/products/awesome-pants.html",
      categories: [
        ["Home", "Bedroom"],
        ["Home", "Furniture", "Bed"],
      ],
    },
  ],
  discounts: {
    RETURN5: {
      discount_amount: 500,
      discount_display_name: "Returning customer 5% discount",
    },
    PRESDAY10: {
      discount_amount: 1000,
      discount_display_name: "President's Day 10% off",
    },
  },
  metadata: {
    shipping_type: "UPS Ground",
    mode: "modal",
  },
  order_id: "JKLMO4321",
  currency: "USD",
  financing_program: "flyus_3z6r12r",
  shipping_amount: 1000,
  tax_amount: 600,
  total: 30100,
});

affirm.checkout.open();

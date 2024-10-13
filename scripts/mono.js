const bodyVariants = [
  {
    amount: 25500,
    ccy: 840,
    merchantPaymInfo: {
      reference: 'order-set-1',
      destination: '5 VitaBison + 1 NeuroVita',
      comment: '',
      customerEmails: [],

      basketOrder: [
        {
          name: 'VitaBison',
          qty: 3,
          sum: 8500,
          total: 25500,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/bank-tel.png',
          unit: 'pcs',
          code: 'VitaBison-1',
          header: 'VitaBison header',
          footer: 'VitaBison footer',
        },
        {
          name: 'VitaBison',
          qty: 2,
          sum: 0,
          total: 0,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/bank-tel.png',
          unit: 'pcs',
          code: 'VitaBison-1',
          header: 'VitaBison header',
          footer: 'VitaBison footer',
        },
        {
          name: 'NeuroVita',
          qty: 1,
          sum: 0,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/checkout/NeuroVita.png',
          total: 0,
          unit: 'pc',
          code: 'NeuroVita-1',
          header: 'NeuroVita header',
          footer: 'NeuroVita footer',
        },
      ],
    },
    validity: 3600,
    paymentType: 'debit',
  },
  {
    amount: 24300,
    ccy: 840,
    merchantPaymInfo: {
      reference: 'order-set-2',
      destination: '4 VitaBison + 1 VitaBoost',
      comment: '',
      customerEmails: [],

      basketOrder: [
        {
          name: 'VitaBison',
          qty: 2,
          sum: 12150,
          total: 24300,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/bank-tel.png',
          unit: 'pcs',
          code: 'VitaBison-1',
          header: 'VitaBison header',
          footer: 'VitaBison footer',
        },
        {
          name: 'VitaBison',
          qty: 2,
          sum: 0,
          total: 0,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/bank-tel.png',
          unit: 'pcs',
          code: 'VitaBison-1',
          header: 'VitaBison header',
          footer: 'VitaBison footer',
        },
        {
          name: 'VitaBoost',
          qty: 1,
          sum: 0,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/checkout/VitaBoost.png',
          total: 0,
          unit: 'pc',
          code: 'VitaBoost-1',
          header: 'VitaBoost header',
          footer: 'VitaBoost footer',
        },
      ],
    },
    validity: 3600,
    paymentType: 'debit',
  },
  {
    amount: 23000,
    ccy: 840,
    merchantPaymInfo: {
      reference: 'order-set-3',
      destination: '4 VitaBison + 1 VitaBoost',
      comment: '',
      customerEmails: [],

      basketOrder: [
        {
          name: 'VitaBison',
          qty: 2,
          sum: 11500,
          total: 23000,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/bank-tel.png',
          unit: 'pcs',
          code: 'VitaBison-1',
          header: 'VitaBison header',
          footer: 'VitaBison footer',
        },
        {
          name: 'NeuroVita',
          qty: 1,
          sum: 0,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/checkout/NeuroVita.png',
          total: 0,
          unit: 'pc',
          code: 'NeuroVita-1',
          header: 'NeuroVita header',
          footer: 'NeuroVita footer',
        },
        {
          name: 'VitaBoost',
          qty: 1,
          sum: 0,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/checkout/VitaBoost.png',
          total: 0,
          unit: 'pc',
          code: 'VitaBoost-1',
          header: 'VitaBoost header',
          footer: 'VitaBoost footer',
        },
      ],
    },
    validity: 3600,
    paymentType: 'debit',
  },
  {
    amount: 100,
    ccy: 980,
    merchantPaymInfo: {
      reference: 'test-order-set',
      destination: 'only for test',
      comment: '',
      customerEmails: [],

      basketOrder: [
        {
          name: 'VitaBison',
          qty: 1,
          sum: 100,
          total: 100,
          icon: 'https://raw.githubusercontent.com/ptbit/VitaBison/refs/heads/master/images/bank-tel.png',
          unit: 'pcs',
          code: 'VitaBison-1',
          header: 'VitaBison header',
          footer: 'VitaBison footer',
        },
      ],
    },
    validity: 3600,
    paymentType: 'debit',
  },
];
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Отримуємо дані з форми
  const formData = new FormData(form);
  const firstName = formData.get('first_name');
  const lastName = formData.get('last_name');
  const zipcode = formData.get('zip');
  const address = formData.get('address1');
  const city = formData.get('city');
  const state = formData.get('state');
  const phone = formData.get('phone');
  const email = formData.get('email');

  // Формуємо строку для поля reference
  const userData = `${firstName}|${lastName}|${zipcode}|${address}|${city}|${state}|${phone}|${email}`;

  const liItems = document.querySelectorAll('.buy__item');
  let SET = 0;

  liItems.forEach((liItem) => {
    if (liItem.classList.contains('active')) {
      SET = liItem.dataset.set;
    }
  });

  sendData(SET, userData);
});

async function sendData(SET, userData) {
  const url = '/mono.php';
  const monoBody = bodyVariants[SET - 1];

  // Додаємо поле destination для відслідковування вибраного набору
  monoBody.merchantPaymInfo.destination = `order${SET}`;

  // Додаємо поле reference для передавання даних користувача
  monoBody.merchantPaymInfo.reference = userData;

  // console.log('Selected set:', SET);
  // console.log('Body sent to Monobank:', monoBody);
  // console.log('userData:', userData);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...monoBody, // Передаємо все з monoBody
        set: SET, // Додаємо SET для передачі в mono.php
      }),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json);
    const goToUrl = json.pageUrl;
    window.location.href = goToUrl;
  } catch (error) {
    console.error(error.message);
  }
}


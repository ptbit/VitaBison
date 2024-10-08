const bodyVariants = [
  {
    amount: 25500,
    ccy: 840,
    merchantPaymInfo: {
      reference: 'order123',
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
      reference: 'order321',
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
      reference: 'order321',
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
];

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const liItems = document.querySelectorAll('.buy__item');
  let SET = 0;

  liItems.forEach((liItem) => {
    if (liItem.classList.contains('active')) {
      SET = liItem.dataset.set;
    }
  });

  console.log(SET);
  sendData(SET);
});

const TOKEN = '***';

async function sendData(SET) {
  const url = 'https://api.monobank.ua/api/merchant/invoice/create';
  const monoBody = bodyVariants[SET - 1];
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': TOKEN,
      },
      body: JSON.stringify(monoBody),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const goToUrl = json.pageUrl;
    window.location.href = goToUrl;
  } catch (error) {
    console.error(error.message);
  }
}

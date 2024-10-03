const rushFormHTML = `
<div class="footer__modal">
  <form>
    <input id="form-input1" class="form-input" placeholder="First name" require>
    <input id="form-input2" class="form-input" placeholder="Last name">
    <button class="btn-rush" type="submit">RUSH MY ORDER</button>
  </form>
</div>
`;
const rushButtons = document.querySelectorAll('.btn-rush');

rushButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    Swal.fire({
      title: 'WHERE DO WE SEND YOUR ORDER?',
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      showCloseButton: true,
      showConfirmButton: false,
      // width: '80%',
      // padding: '56px 80px',
      html: rushFormHTML,
      background: '#212121',
    });
  })
);
// const { value: formValues } = await Swal.fire({
//   title: 'Multiple inputs',
//   html: `
//     <input id="swal-input1" class="swal2-input">
//     <input id="swal-input2" class="swal2-input">
//   `,
//   focusConfirm: false,
//   preConfirm: () => {
//     return [
//       document.getElementById('swal-input1').value,
//       document.getElementById('swal-input2').value,
//     ];
//   },
// });
// if (formValues) {
//   Swal.fire(JSON.stringify(formValues));
// }

// contactUsBtn.addEventListener('click', () => {
//   Swal.fire({
//     title: `Contact Us`,
//     showClass: {
//       popup: `
//         animate__animated
//         animate__fadeInUp
//         animate__faster
//       `,
//     },
//     showCloseButton: true,
//     showConfirmButton: false,
//     // width: '80%',
//     html: contactUsHTML,
//   });
// });

$(document).ready(function () {
    $(".showModal").click(function () { 
        $(".modalContainer").toggleClass("hiddennone");
    });
    $(".x-btn-pop").click(function () { 
        $(".modalContainer").toggleClass("hiddennone");
    });
});


function confirmBtn() {
    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  }

  function basicMessage() {
    Swal.fire('Hello World')
  }
  function textUnder() {
    Swal.fire(
    'Hello World',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'info'
    )
  }
  function modalTitle() {
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>'
  })
  }
  function withHtml() {
    Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    icon: 'info',
    html:
      'You can use <b>bold text</b>, ' +
      '<a href="//sweetalert2.github.io">links</a> ' +
      'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down'
  })
  }
  function dialog() {
    Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  }
  function animatePopup() {
    Swal.fire({
    title: 'Custom animation with Animate.css',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  }
  function confirmBtn() {
    Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  }
  function parameterBtn() {
    const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    } else if (
  
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
  }
  function withImage() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  function swalTimer() {
    let timerInterval
  Swal.fire({
    title: 'Swal Auto Close Feature',
    html: 'I will close in 4 seconds.',
    timer: 4000,
    timerProgressBar: true
  })
  }
  function warningIcon() {
    Swal.fire({
        html: '<h3 class="text-warning">Warning Icon</h3>',
        icon: 'warning'
    })
  }
  function errorIcon() {
    Swal.fire({
        html: '<h3 class="text-danger">Error Icon</h3>',
        icon: 'error'
    })
  }
  function successIcon() {
    Swal.fire({
        html: '<h3 class="text-success">Success Icon</h3>',
        icon: 'success'
    })
  }
  function infoIcon() {
    Swal.fire({
        html: '<h3 class="text-info">Info Icon</h3>',
        icon: 'info'
    })
  }
  function questionIcon() {
    Swal.fire({
        html: '<h3 class="text-muted">Question Icon</h3>',
        icon: 'question'
    })
  }





  const imageUploadContainer = document.getElementById("image-upload-container");
  const uploadedImage = document.getElementById("uploaded-image");
  const imageUploadInput = document.getElementById("image-upload-input");
  const uploadLabel = document.querySelector(".image-upload-label");

  imageUploadContainer.addEventListener("dragover", (e) => {
      e.preventDefault();
      imageUploadContainer.classList.add("dragover");
  });

  imageUploadContainer.addEventListener("dragleave", () => {
      imageUploadContainer.classList.remove("dragover");
  });

  imageUploadContainer.addEventListener("drop", (e) => {
      e.preventDefault();
      imageUploadContainer.classList.remove("dragover");
      const files = e.dataTransfer.files;
      handleFiles(files);
  });

  imageUploadInput.addEventListener("change", (e) => {
      const files = e.target.files;
      handleFiles(files);
  });

  function handleFiles(files) {
      const imageFile = files[0];
      if (imageFile && imageFile.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
              uploadedImage.src = e.target.result;
              uploadedImage.style.display = "block";
              uploadLabel.style.display = "none";
          };
          reader.readAsDataURL(imageFile);
      }
  }
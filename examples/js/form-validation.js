//jquery validator method for atleast one numeric value
$.validator.addMethod(
  "anumeric",
  function(value, element) {
    return this.optional(element) || /.*[0-9].*/i.test(value);
  },
  "Please provide atleast one numeric value"
);
//jquery validator method for alphanumeric value
$.validator.addMethod(
  "alphanumeric",
  function(value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
  },
  "Letters, numbers, and underscores only please"
);

//on jquery document ready
$(function() {
  $("#signupForm").validate({
    rules: {
      email: "required",
      full_name: {
        alphanumeric: true
      },
      password: {
        anumeric: true
      }
    },
    messages: {
      email: "Please add valid email address",
      password: "Password must have a numeric value"
    }
  });
});

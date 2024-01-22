var myform = document.querySelector('#myform')

function validate()
{
if (myform.firstname.value == "")
{
    alert("firstname is required")
    myform.firstname.focus()
    return false
}
else if (myform.lastname.value == "")
{
    alert("lastname is required")
    myform.lastname.focus()
    return false
}

else if (myform.emailAdd.value == "")
{
    alert("Email is required")
    myform.emailAdd.focus()
    return false
}
else if (myform.mobile.value == "")
{
    alert("phno is required")
    myform.mobile.focus()
    return false
}
else if (myform.address.value == "")
{
    alert(" address is required")
    myform.address.focus()
    return false
}

else if (myform.department.value == "")
{
    alert("Department is required")
    myform.department.focus()
    return false
}

else if (myform.gender.value == "")
{
    alert("Gender is required")
    myform.gender.focus()
    return false
}


}
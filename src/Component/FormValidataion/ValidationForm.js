export default function formValidation(event) {
    var { name, value } = event.target;
    switch (name) {
        case "name":
            if (value.length === 0) return name + " must required";
            else if (value.length < 3)
                return name + " must contains atleast 3 Character";
            else if (value.length > 50)
                return name + " must contains less then 50 Character";
            else return ""

        default:
            return ""
    }
}
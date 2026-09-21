document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".admission-form");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const studentName = formData.get("studentName")?.toString().trim() || "Student";
        const parentName = formData.get("parentName")?.toString().trim() || "Parent";
        const parentPhone = formData.get("parentPhone")?.toString().trim() || "";
        const parentEmail = formData.get("parentEmail")?.toString().trim() || "";
        const gradeLevel = formData.get("gradeLevel")?.toString().trim() || "Not specified";
        const contactMethod = formData.get("contactMethod")?.toString().trim() || "WhatsApp";

        const secretaryPhone = "+254728124085";
        const directorPhone = "+254728124085";
        const customerCarePhone = "+254720122236";
        const schoolEmail = "stelizabeth986@gmail.com";
        const secretaryEmail = "secretary@stelizabethschool.com";

        const enquiryText = [
            "New school enquiry",
            `Student Name: ${studentName}`,
            `Parent Name: ${parentName}`,
            `Parent Phone / WhatsApp: ${parentPhone}`,
            `Parent Email: ${parentEmail || "Not provided"}`,
            `Grade Level: ${gradeLevel}`,
            `Preferred Contact Method: ${contactMethod}`,
            "Please contact the parent for further information and next steps."
        ].join("\n");

        const mailtoLink = `mailto:${secretaryEmail}?cc=${schoolEmail}&subject=${encodeURIComponent("New School Enquiry")}&body=${encodeURIComponent(enquiryText)}`;
        const smsToSecretary = `sms:${secretaryPhone}?body=${encodeURIComponent(enquiryText)}`;
        const smsToDirector = `sms:${directorPhone}?body=${encodeURIComponent(enquiryText)}`;
        const smsToCustomerCare = `sms:${customerCarePhone}?body=${encodeURIComponent(enquiryText)}`;
        const whatsappSecretary = `https://wa.me/${secretaryPhone.replace("+", "")}?text=${encodeURIComponent(enquiryText)}`;
        const whatsappDirector = `https://wa.me/${directorPhone.replace("+", "")}?text=${encodeURIComponent(enquiryText)}`;
        const whatsappCustomerCare = `https://wa.me/${customerCarePhone.replace("+", "")}?text=${encodeURIComponent(enquiryText)}`;

        const button = form.querySelector("button");
        const originalText = button.textContent;

        button.textContent = "Sending...";
        button.disabled = true;

        const preferredLink = contactMethod === "Email" && parentEmail
            ? mailtoLink
            : contactMethod === "Phone Call"
                ? smsToSecretary
                : whatsappSecretary;

        window.open(preferredLink, "_blank");
        setTimeout(() => window.open(mailtoLink, "_blank"), 200);
        setTimeout(() => window.open(smsToSecretary, "_blank"), 400);
        setTimeout(() => window.open(smsToDirector, "_blank"), 600);
        setTimeout(() => window.open(smsToCustomerCare, "_blank"), 800);
        setTimeout(() => window.open(whatsappSecretary, "_blank"), 1000);
        setTimeout(() => window.open(whatsappDirector, "_blank"), 1200);
        setTimeout(() => window.open(whatsappCustomerCare, "_blank"), 1400);

        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            form.reset();
        }, 2000);
    });
});

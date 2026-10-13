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
        const enquiryType = formData.get("enquiryType")?.toString().trim() || "General enquiry";
        const message = formData.get("message")?.toString().trim() || "No additional details provided.";
        const contactMethod = formData.get("contactMethod")?.toString().trim() || "WhatsApp";

        const schoolSecretaryPhone = "+254720122236";
        const schoolEmail = "st.elizabethmulalaschool@gmail.com";

        const enquiryText = [
            "New school enquiry",
            `Information Requested: ${enquiryType}`,
            `Student Name: ${studentName}`,
            `Parent Name: ${parentName}`,
            `Parent Phone / WhatsApp: ${parentPhone}`,
            `Parent Email: ${parentEmail || "Not provided"}`,
            `Grade Level: ${gradeLevel}`,
            `Preferred Contact Method: ${contactMethod}`,
            `Parent Message: ${message}`,
            "Please contact the parent. Verify parent/guardian identity before sharing any student fee or performance records."
        ].join("\n");

        const subject = encodeURIComponent("Parent enquiry for the school office");
        const encodedEnquiry = encodeURIComponent(enquiryText);
        const status = document.querySelector("#enquiry-status");
        let contactUrl;

        if (contactMethod === "Email") {
            contactUrl = `mailto:${schoolEmail}?subject=${subject}&body=${encodedEnquiry}`;
            status.textContent = "Your email app will open with a draft. Review it and send it to contact the school.";
        } else if (contactMethod === "Phone Call") {
            contactUrl = `tel:${schoolSecretaryPhone}`;
            status.textContent = "Your phone app will open. Ask the school office to speak with the secretary.";
        } else {
            contactUrl = `https://wa.me/${schoolSecretaryPhone.replace("+", "")}?text=${encodedEnquiry}`;
            status.textContent = "WhatsApp will open with a draft. Review it and tap Send to contact the school.";
        }

        window.open(contactUrl, "_blank", "noopener,noreferrer");
    });
});

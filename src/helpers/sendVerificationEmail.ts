import { resend } from "@/lib/resend";
import { VerificationEmail } from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { error } from "console";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Mystery Message | Verification code",
      react: VerificationEmail({ username: username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Veification email sent successfully",
    };
  } catch (emailError) {
    console.error("Error sending verification email", error);
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}

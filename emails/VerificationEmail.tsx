import * as React from "react";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export const VerificationEmail: React.FC<Readonly<VerificationEmailProps>> = ({
  username,
  otp,
}) => (
  <div>
    <h1> Hello, {username}!</h1>
    <h3>OTP:{otp}</h3>
  </div>
);

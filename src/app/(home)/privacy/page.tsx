import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <Card className='max-w-4xl mx-auto'>
                <CardHeader>
                    <CardTitle className='text-3xl font-bold text-center'>
                        Privacy Policy
                    </CardTitle>
                </CardHeader>
                <CardContent className='prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none'>
                    <p>
                        At Sainseni, we are committed to protecting your privacy
                        and ensuring the security of your personal information.
                        This Privacy Policy explains how we collect, use,
                        disclose, and safeguard your information when you use
                        our service.
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such
                        as when you create an account, use our services, or
                        communicate with us. This may include:
                    </p>
                    <ul>
                        <li>Name and contact information</li>
                        <li>Account credentials</li>
                        <li>Payment information</li>
                        <li>Any other information you choose to provide</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, maintain, and improve our services</li>
                        <li>
                            Process transactions and send related information
                        </li>
                        <li>
                            Send you technical notices, updates, security
                            alerts, and support messages
                        </li>
                        <li>
                            Respond to your comments, questions, and customer
                            service requests
                        </li>
                        <li>
                            Communicate with you about products, services,
                            offers, and events
                        </li>
                        <li>
                            Monitor and analyze trends, usage, and activities in
                            connection with our services
                        </li>
                    </ul>

                    <h2>3. Sharing of Information</h2>
                    <p>
                        We may share your information in the following
                        circumstances:
                    </p>
                    <ul>
                        <li>
                            With vendors, consultants, and other service
                            providers who need access to such information to
                            carry out work on our behalf
                        </li>
                        <li>
                            In response to a request for information if we
                            believe disclosure is in accordance with, or
                            required by, any applicable law or legal process
                        </li>
                        <li>
                            If we believe your actions are inconsistent with our
                            user agreements or policies, or to protect the
                            rights, property, and safety of Sainseni or others
                        </li>
                        <li>
                            In connection with, or during negotiations of, any
                            merger, sale of company assets, financing, or
                            acquisition of all or a portion of our business by
                            another company
                        </li>
                        <li>With your consent or at your direction</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>
                        We take reasonable measures to help protect information
                        about you from loss, theft, misuse, unauthorized access,
                        disclosure, alteration, and destruction.
                    </p>

                    <h2>5. Your Choices</h2>
                    <p>
                        You may update, correct, or delete your account
                        information at any time by logging into your account or
                        contacting us. You may also opt out of receiving
                        promotional communications from us by following the
                        instructions in those communications.
                    </p>

                    <h2>6. Changes to this Privacy Policy</h2>
                    <p>
                        We may change this Privacy Policy from time to time. If
                        we make changes, we will notify you by revising the date
                        at the bottom of this policy and, in some cases, we may
                        provide you with additional notice.
                    </p>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy,
                        please contact us at:
                    </p>
                    <p>
                        Sainseni
                        <br />
                        [Your Address]
                        <br />
                        Email: [Your Contact Email]
                        <br />
                        Phone: [Your Contact Phone Number]
                    </p>

                    <p className='text-sm text-muted-foreground mt-8'>
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
    return (
        <div className='container mx-auto px-4 py-8'>
            <Card className='max-w-4xl mx-auto'>
                <CardHeader>
                    <CardTitle className='text-3xl font-bold text-center'>
                        Terms of Service
                    </CardTitle>
                </CardHeader>
                <CardContent className='prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none'>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using the Sainseni service, you agree to
                        be bound by these Terms of Service. If you do not agree
                        to all the terms and conditions, you may not access or
                        use our services.
                    </p>

                    <h2>2. Description of Service</h2>
                    <p>
                        Sainseni provides [brief description of your service].
                        We reserve the right to modify, suspend, or discontinue
                        the service at any time without notice.
                    </p>

                    <h2>3. User Accounts</h2>
                    <p>
                        You may need to create an account to use some of our
                        services. You are responsible for maintaining the
                        confidentiality of your account and password. You agree
                        to accept responsibility for all activities that occur
                        under your account.
                    </p>

                    <h2>4. User Conduct</h2>
                    <p>You agree not to use the service to:</p>
                    <ul>
                        <li>Violate any laws or regulations</li>
                        <li>Infringe on the rights of others</li>
                        <li>Distribute spam or malicious content</li>
                        <li>
                            Attempt to gain unauthorized access to our systems
                            or user accounts
                        </li>
                    </ul>

                    <h2>5. Intellectual Property</h2>
                    <p>
                        The content, features, and functionality of the Sainseni
                        service are owned by Sainseni and are protected by
                        international copyright, trademark, patent, trade
                        secret, and other intellectual property laws.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        Sainseni shall not be liable for any indirect,
                        incidental, special, consequential, or punitive damages
                        resulting from your access to or use of, or inability to
                        access or use, the service.
                    </p>

                    <h2>7. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms of Service at
                        any time. We will provide notice of significant changes
                        by posting a prominent announcement on our service.
                    </p>

                    <h2>8. Governing Law</h2>
                    <p>
                        These Terms of Service shall be governed by and
                        construed in accordance with the laws of [Your
                        Jurisdiction], without regard to its conflict of law
                        provisions.
                    </p>

                    <h2>9. Contact Information</h2>
                    <p>
                        If you have any questions about these Terms of Service,
                        please contact us at [your contact email].
                    </p>

                    <p className='text-sm text-muted-foreground mt-8'>
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

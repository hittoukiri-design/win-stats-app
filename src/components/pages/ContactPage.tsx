import { useEffect, useState, useRef } from 'react';
import { BaseCrudService } from '@/integrations';
import { ContactInquiries, InformationGuides } from '@/entities';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  MessageSquare,
  Clock,
  Mail,
  Phone,
  HelpCircle,
  CheckCircle,
  Send
} from 'lucide-react';

const AnimatedElement: React.FC<{children: React.ReactNode; className?: string; delay?: number}> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.classList.add('is-visible');
        }, delay);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return <div ref={ref} className={`${className || ''} opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0`}>{children}</div>;
};

export default function ContactPage() {
  const [guides, setGuides] = useState<InformationGuides[]>([]);
  const [isLoadingGuides, setIsLoadingGuides] = useState(true);
  const [formData, setFormData] = useState({
    userName: '',
    emailAddress: '',
    inquirySubject: '',
    messageContent: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    loadGuides();
  }, []);

  const loadGuides = async () => {
    setIsLoadingGuides(true);
    try {
      const result = await BaseCrudService.getAll<InformationGuides>('informationguides', {}, { limit: 6 });
      setGuides(result.items);
    } catch (error) {
      console.error('Error loading guides:', error);
    } finally {
      setIsLoadingGuides(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await BaseCrudService.create<ContactInquiries>('contactinquiries', {
        _id: crypto.randomUUID(),
        userName: formData.userName,
        emailAddress: formData.emailAddress,
        inquirySubject: formData.inquirySubject,
        messageContent: formData.messageContent,
        submissionTimestamp: new Date()
      });
      setSubmitSuccess(true);
      setFormData({ userName: '', emailAddress: '', inquirySubject: '', messageContent: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement>
            <div className="max-w-3xl mx-auto text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-primary-foreground/90">
                We&apos;re here to help! Reach out to our 24/7 support team
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                24/7 Customer Support
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our dedicated team is always available to assist you
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: 'Round-the-Clock', desc: 'Available 24 hours a day, 7 days a week', color: 'text-primary' },
              { icon: MessageSquare, title: 'Live Chat', desc: 'Instant responses via in-app chat support', color: 'text-secondary' },
              { icon: Mail, title: 'Email Support', desc: 'Send us your queries anytime', color: 'text-accent' }
            ].map((item, index) => (
              <AnimatedElement key={index} delay={index * 100}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className={`w-7 h-7 ${item.color}`} />
                    </div>
                    <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 bg-gradient-to-r from-purple-400/15 via-blue-300/15 to-purple-400/15 rounded-lg py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedElement>
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>

                  {submitSuccess && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <p className="text-green-800 text-sm">
                        Your message has been sent successfully! We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="userName">Your Name</Label>
                      <Input
                        id="userName"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="emailAddress">Email Address</Label>
                      <Input
                        id="emailAddress"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="inquirySubject">Subject</Label>
                      <Input
                        id="inquirySubject"
                        type="text"
                        placeholder="What is your inquiry about?"
                        value={formData.inquirySubject}
                        onChange={(e) => setFormData({ ...formData, inquirySubject: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="messageContent">Message</Label>
                      <Textarea
                        id="messageContent"
                        placeholder="Tell us how we can help you..."
                        value={formData.messageContent}
                        onChange={(e) => setFormData({ ...formData, messageContent: e.target.value })}
                        required
                        rows={5}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedElement>

            {/* Contact Information */}
            <AnimatedElement delay={100}>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-heading font-bold mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold mb-1">Live Chat</h3>
                          <p className="text-muted-foreground text-sm">
                            Access live chat support directly from the app for instant assistance
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold mb-1">Email Support</h3>
                          <p className="text-muted-foreground text-sm">
                            Send us your queries and we&apos;ll respond within 24 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold mb-1">Response Time</h3>
                          <p className="text-muted-foreground text-sm">
                            Average response time: Under 5 minutes for live chat, 24 hours for email
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-bold mb-4">Need Immediate Help?</h3>
                    <p className="text-muted-foreground mb-4">
                      For urgent issues, use the in-app live chat feature for instant support from our team.
                    </p>
                    <Button size="lg" className="w-full">
                      Open Live Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Help Guides Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <HelpCircle className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Help & Information Guides
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find answers to common questions and learn more about our platform
              </p>
            </div>
          </AnimatedElement>

          <div className="min-h-[300px]">
            {isLoadingGuides ? null : guides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {guides.map((guide, index) => (
                  <AnimatedElement key={guide._id} delay={index * 50}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <HelpCircle className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-lg font-heading font-bold group-hover:text-primary transition-colors">
                            {guide.guideTitle}
                          </h3>
                        </div>

                        {guide.shortDescription && (
                          <p className="text-muted-foreground text-sm mb-3">
                            {guide.shortDescription}
                          </p>
                        )}

                        {guide.topicCategory && (
                          <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium mb-3">
                            {guide.topicCategory}
                          </span>
                        )}

                        {guide.helpfulLink && (
                          <a
                            href={guide.helpfulLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                          >
                            Learn More <Send className="w-3 h-3" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No guides available at the moment</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quick answers to common questions
              </p>
            </div>
          </AnimatedElement>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { q: 'How do I register on Dostwin Game?', a: 'Simply tap the register button, enter your mobile number, create a password, and use the invite code provided. Your account will be created instantly.' },
              { q: 'What is the minimum deposit amount?', a: 'The minimum deposit amount is ₹100. You can deposit using UPI, Paytm, E-Wallet, or USDT.' },
              { q: 'How long do withdrawals take?', a: 'Withdrawals are typically processed within 1 to 24 hours, depending on the payment method chosen.' },
              { q: 'Is Dostwin Game safe and secure?', a: 'Yes, we use advanced encryption and security protocols to protect all transactions and user data.' },
              { q: 'Can I play on iOS devices?', a: 'Currently, the app is available for Android devices. However, you can use our web version on iOS devices.' }
            ].map((faq, index) => (
              <AnimatedElement key={index} delay={index * 50}>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-bold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Our support team is ready to help you 24/7
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Contact Support Now
              </Button>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Phone, Mail, Building, Users, Shield, CheckCircle, Home, FileText, Plane, Wrench, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { companyProfileData } from "@/data/projects";

const CompanyProfile = () => {
  const services = [
    {
      icon: Building,
      title: "Property Buying & Selling",
      description: "Complete solution for buying and selling of property in Islamabad & Rawalpindi"
    },
    {
      icon: FileText,
      title: "Legal Consultancy",
      description: "Professional legal consultancy and verification services"
    },
    {
      icon: Home,
      title: "Possession & Rental Services",
      description: "Possession, cases, and rental agreements management"
    },
    {
      icon: Plane,
      title: "Overseas Pakistani Guidance",
      description: "Specialized guidance for overseas Pakistanis regarding property transactions"
    },
    {
      icon: Wrench,
      title: "Construction & Development",
      description: "Construction and development services with complete delivery guarantee"
    },
    {
      icon: Shield,
      title: "Pre & Post Sale Services",
      description: "Comprehensive pre-sale and post-sale support services"
    }
  ];

  const specialFeatures = companyProfileData.specialFeatures || [
    'Legal verification of property ownership',
    '3 days and daily updates on transactions',
    'Pre-sale and post-sale services',
    'Complete ownership and transfer guarantee',
    'Construction and development services with complete delivery',
    'Reliable and authentic societies in Islamabad & Rawalpindi only',
    'Comprehensive guidance about investment opportunities'
  ];

  const directors = companyProfileData.team;

  const experiences = [
    { name: "Capital Smart City", logo: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=200&h=200&fit=crop" },
    { name: "RUDN Enclave", logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=200&fit=crop" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Company Profile | Excel Marketing Pvt Ltd</title>
        <meta name="description" content="Excel Marketing Pvt Ltd - We don't just sell, we connect, create, and convert potential into performance. Leading property management, sales, marketing, and leasing services." />
      </Helmet>

      <Navigation />

      {/* Hero Section with Contact */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-purple-600/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mb-8 lg:mb-0"
            >
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center space-x-2 text-sm">
                  <li>
                    <Link to="/" className="hover:text-cyan-300 transition-colors">
                      <Button variant="link" className="text-white p-0 hover:text-cyan-300">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Home
                      </Button>
                    </Link>
                  </li>
                  <li className="text-cyan-400">/</li>
                  <li className="text-cyan-400">Company Profile</li>
                </ol>
              </nav>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
                style={{
                  textShadow: '0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)'
                }}
              >
                {companyProfileData.company_name}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-cyan-200 mb-6 font-medium"
              >
                "{companyProfileData.tagline}"
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center space-x-2 text-cyan-300 mb-4"
              >
                <MapPin className="h-5 w-5" />
                <span className="text-lg font-medium">Exclusively serving Islamabad & Rawalpindi</span>
              </motion.div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="lg:w-80 bg-slate-800/60 backdrop-blur-lg border border-cyan-500/30 relative overflow-hidden">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-sm"></div>
                
                <CardContent className="relative p-6">
                  <h3 className="text-lg font-semibold text-white mb-4" style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                  }}>
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3"
                    >
                      <Phone className="h-5 w-5 text-cyan-400" />
                      <a 
                        href={`tel:${companyProfileData.contact.phone}`} 
                        className="text-white hover:text-cyan-300 transition-colors"
                        style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
                      >
                        {companyProfileData.contact.phone}
                      </a>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3"
                    >
                      <Mail className="h-5 w-5 text-purple-400" />
                      <a 
                        href={`mailto:${companyProfileData.contact.email}`} 
                        className="text-white hover:text-purple-300 transition-colors"
                        style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}
                      >
                        {companyProfileData.contact.email}
                      </a>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-32 left-16 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-32 right-16 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-cyan-400/50 text-cyan-400 bg-cyan-400/10 backdrop-blur-sm">
              About Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{
              textShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
            }}>
              Who We Are
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-lg leading-relaxed"
          >
            <div className="bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 rounded-xl p-8 mb-8">
              <p className="text-white mb-6" style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
              }}>
                {companyProfileData.ceo.bio}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg border border-cyan-500/30 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <MapPin className="h-5 w-5 text-cyan-400 mr-2" />
                <span className="font-semibold text-white" style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                }}>
                  Service Area
                </span>
              </div>
              <p className="text-white" style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
              }}>
                We exclusively operate in <strong className="text-cyan-300">Islamabad and Rawalpindi</strong>, ensuring deep local expertise and personalized service in these premium markets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-cyan-400/50 text-cyan-400 bg-cyan-400/10 backdrop-blur-sm">
              Services Offered
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{
              textShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
            }}>
              Complete Real Estate Solutions
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Complete solution for real estate and property-related matters in Islamabad & Rawalpindi
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all border border-cyan-500/30">
                      <service.icon className="h-8 w-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4" style={{
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                    }}>
                      {service.title}
                    </h3>
                    <p className="text-slate-300" style={{
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
                    }}>
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Special Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-lg border border-cyan-500/30 relative overflow-hidden">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl"></div>
              
              <CardContent className="relative p-8">
                <div className="text-center mb-8">
                  <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2">
                    Special Features
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{
                    textShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
                  }}>
                    Why Choose Excel Marketing
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specialFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-white font-medium" style={{
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                      }}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-cyan-400/50 text-cyan-400 bg-cyan-400/10 backdrop-blur-sm">
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Leadership Team</h2>
          </motion.div>

          {/* CEO Card - Futuristic Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 rounded-2xl blur-lg"></div>
              
              <Card className="relative bg-slate-900/80 backdrop-blur-lg border border-cyan-500/30 rounded-2xl overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl"></div>
                
                <CardContent className="relative p-8 md:p-12">
                  <div className="text-center">
                    {/* CEO Title Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 text-sm font-semibold">
                        {companyProfileData.ceo.title}
                      </Badge>
                    </motion.div>

                    {/* CEO Name with Glow Effect */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-4xl md:text-5xl font-bold mb-6 text-white"
                      style={{
                        textShadow: '0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(34, 211, 238, 0.3)',
                        filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.4))'
                      }}
                    >
                      {companyProfileData.ceo.name}
                    </motion.h3>

                    {/* Company Name */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-xl text-cyan-300 mb-8 font-medium"
                    >
                      CEO of Excel Marketing Pvt Ltd
                    </motion.p>

                    {/* Description with High Contrast */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="max-w-3xl mx-auto mb-8"
                    >
                      <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
                        <p className="text-lg text-white leading-relaxed mb-4" style={{
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                        }}>
                          Visionary leader driving innovation in property management and real estate excellence.
                        </p>
                        <p className="text-white/90 leading-relaxed" style={{
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                        }}>
                          Committed to delivering exceptional results and building lasting relationships across Islamabad & Rawalpindi markets.
                        </p>
                      </div>
                    </motion.div>

                    {/* Contact Information with Glow */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        href={`tel:${companyProfileData.contact.phone}`}
                        className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-6 py-3 text-white hover:border-cyan-400/50 transition-all group"
                      >
                        <Phone className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300" />
                        <span className="font-medium">{companyProfileData.contact.phone}</span>
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.05, y: -2 }}
                        href={`mailto:${companyProfileData.contact.email}`}
                        className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg px-6 py-3 text-white hover:border-purple-400/50 transition-all group"
                      >
                        <Mail className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
                        <span className="font-medium">{companyProfileData.contact.email}</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Directors Grid - No Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white text-center mb-12">Executive Team</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {directors.map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <Badge 
                        variant="outline" 
                        className="mb-4 border-cyan-400/50 text-cyan-400 bg-cyan-400/10 text-xs"
                      >
                        {director.role}
                      </Badge>
                      
                      <h3 className="text-lg font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors" style={{
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                      }}>
                        {director.name}
                      </h3>
                      
                      {director.description && (
                        <div className="text-sm text-slate-300 leading-relaxed">
                          {director.description.split('\n').map((line, i) => (
                            <p 
                              key={i} 
                              className={i > 0 ? 'mt-2' : ''}
                              style={{
                                textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
                              }}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-cyan-400/50 text-cyan-400 bg-cyan-400/10 backdrop-blur-sm">
              Our Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{
              textShadow: '0 0 20px rgba(34, 211, 238, 0.3)'
            }}>
              Islamabad & Rawalpindi Portfolio
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We specialize exclusively in premium projects in Islamabad and Rawalpindi, ensuring deep local expertise and market knowledge
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="group cursor-pointer overflow-hidden bg-slate-800/40 backdrop-blur-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 relative">
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                  
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={experience.logo} 
                      alt={experience.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent"></div>
                  </div>
                  
                  <CardContent className="relative p-6 text-center">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3" style={{
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)'
                    }}>
                      {experience.name}
                    </h3>
                    <Badge variant="outline" className="border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
                      Islamabad Region
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyProfile;

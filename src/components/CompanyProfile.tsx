import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { companyProfileData } from "@/data/projects";

const CompanyProfile = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-600 text-blue-600">
            About Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Company Profile
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Learn about our leadership and the team behind our success
          </p>
        </div>

        {/* Company Overview */}
        <Card className="mb-12 bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{companyProfileData.company_name}</h3>
            <p className="text-lg font-semibold text-blue-600 mb-6">
              {companyProfileData.tagline}
            </p>
          </CardContent>
        </Card>

        {/* CEO Profile */}
        <Card className="mb-12 bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <Badge className="mb-4 bg-blue-600 text-white">CEO</Badge>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{companyProfileData.ceo.name}</h3>
            <p className="text-lg text-gray-600 mb-2 font-medium">{companyProfileData.ceo.title}</p>
            <div className="prose text-gray-700 font-medium leading-relaxed">
              <p>{companyProfileData.ceo.bio}</p>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyProfileData.team.map((member, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed whitespace-pre-line">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <Card className="mb-12 bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {companyProfileData.services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{service}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Special Features Section */}
        <Card className="bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">What Makes Us Special</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {companyProfileData.specialFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompanyProfile;

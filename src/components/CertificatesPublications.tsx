import { Award, FileText, Calendar, Building2, Trophy, Star } from "lucide-react";
import TextReveal from "./TextReveal";

interface Certificate {
  title: string;
  description: string;
  year?: string;
  issuer?: string;
}

interface Publication {
  title: string;
  description: string;
  source?: string;
  date?: string;
}

interface CertificatesPublicationsProps {
  certificates: Certificate[];
  publications: Publication[];
}

const CertificatesPublications = ({
  certificates,
  publications,
}: CertificatesPublicationsProps) => {
  return (
    <div className="space-y-20">
      {/* Certificates Section - Badge/Ribbon Style */}
      <div>
        <TextReveal>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Certifications & Awards</h3>
            </div>
            <p className="text-muted-foreground">Recognized excellence in elevator manufacturing</p>
          </div>
        </TextReveal>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {certificates.map((certificate, index) => (
            <TextReveal key={index} delay={index * 100}>
              <div className="relative group h-full flex">
                {/* Ribbon Badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="relative">
                    <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg shadow-lg font-bold text-xs flex items-center gap-1.5">
                      <Star className="h-3 w-3 fill-current" />
                      <span>{certificate.year || "2023"}</span>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-primary"></div>
                  </div>
                </div>

                {/* Card - Fixed height and width */}
                <div className="bg-gradient-to-br from-background to-muted/30 border-2 border-primary/20 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 w-full h-full flex flex-col group-hover:border-primary/50">
                  {/* Icon Badge */}
                  <div className="mb-6 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 group-hover:border-primary group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 flex-shrink-0 mx-auto">
                    <Award className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg md:text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {certificate.title}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1 mb-6">
                    {certificate.description}
                  </p>

                  {/* Issuer Badge */}
                  {certificate.issuer && (
                    <div className="pt-4 border-t-2 border-primary/10 mt-auto">
                      <div className="flex items-center gap-2 text-primary font-semibold text-xs md:text-sm">
                        <Building2 className="h-3 w-3 md:h-4 md:w-4" />
                        <span className="truncate">{certificate.issuer}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>

      {/* Publications Section - Timeline/Article Style */}
      <div>
        <TextReveal delay={200}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Publications & Recognition</h3>
            </div>
            <p className="text-muted-foreground">Featured in leading industry publications</p>
          </div>
        </TextReveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((publication, index) => (
            <TextReveal key={index} delay={index * 150 + 300}>
              <div className="relative pl-8 md:pl-12 group">
                {/* Timeline Line */}
                {index < publications.length - 1 && (
                  <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
                </div>

                {/* Article Card */}
                <div className="bg-gradient-to-r from-background via-muted/20 to-background border-l-4 border-primary rounded-r-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:border-primary/80 group-hover:translate-x-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {publication.title}
                      </h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {publication.description}
                      </p>
                    </div>
                    
                    {/* Date Badge */}
                    {publication.date && (
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
                          <Calendar className="h-4 w-4" />
                          <span className="font-semibold text-sm">{publication.date}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Source */}
                  {publication.source && (
                    <div className="pt-4 border-t border-primary/10">
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                        <FileText className="h-4 w-4" />
                        <span>{publication.source}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPublications;


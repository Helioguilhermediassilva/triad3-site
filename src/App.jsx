import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  FileText, 
  Smartphone,
  Building,
  Gem,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-sm transform rotate-45"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                  TRIAD3
                </h1>
                <p className="text-xs text-gray-600">Patrimônio Inteligente</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
              <a href="#metodologia" className="text-gray-700 hover:text-blue-600 transition-colors">Metodologia</a>
              <a href="#funcionalidades" className="text-gray-700 hover:text-blue-600 transition-colors">Funcionalidades</a>
              <a href="#publico" className="text-gray-700 hover:text-blue-600 transition-colors">Público</a>
              <Button className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700">
                Começar Agora
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
                <a href="#metodologia" className="text-gray-700 hover:text-blue-600 transition-colors">Metodologia</a>
                <a href="#funcionalidades" className="text-gray-700 hover:text-blue-600 transition-colors">Funcionalidades</a>
                <a href="#publico" className="text-gray-700 hover:text-blue-600 transition-colors">Público</a>
                <Button className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 w-full">
                  Começar Agora
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 border-blue-200">
            A Revolução da Eficiência Patrimonial
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Transformando seu patrimônio em legado
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Para todas as pessoas, de todas as idades, construir, administrar e proteger seu legado 
            com base na metodologia judaica de prosperidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700">
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50">
              Ver Demonstração
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Crescimento Inteligente</h3>
              <p className="text-gray-600 text-sm">Orientações baseadas na Tríade Patrimonial</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Proteção Total</h3>
              <p className="text-gray-600 text-sm">Segurança e conformidade com LGPD</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Gestão Completa</h3>
              <p className="text-gray-600 text-sm">Dashboard centralizado e relatórios avançados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section id="metodologia" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Tríade Patrimonial</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Baseada na cultura judaica de prosperidade, nossa metodologia divide os investimentos 
              em três pilares fundamentais para construção de riqueza sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-green-600">Dinheiro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aplicações financeiras, ações, fundos de investimento, títulos públicos e criptomoedas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-600">Imóveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Propriedades residenciais, comerciais e terrenos para diversificação e proteção contra inflação.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gem className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-purple-600">Ativos de Valor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pedras preciosas, metais nobres, obras de arte e outros bens de valor intrínseco.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">O Segredo da Prosperidade Judaica</h3>
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Guardamos nossa fortuna em 3 pilares: Dinheiro, Imóveis e Pedras Preciosas. 
              Assim, quando o mercado desequilibra para um lado, os outros se valorizam."
            </blockquote>
            <p className="text-gray-600">- Metodologia baseada na cultura judaica de prosperidade</p>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Funcionalidades Completas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reúna todas as suas informações patrimoniais em um só lugar com comandos inteligentes 
              e direcionamentos de investimentos personalizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Dashboard Centralizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visão completa do seu patrimônio com gráficos interativos e alertas inteligentes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Importação Fiscal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Importe dados da Receita Federal e extratos bancários automaticamente.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Fluxo de Caixa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Controle completo de receitas, despesas e orçamentos mensais.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Recomendações IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sistema inteligente de recomendações baseado no seu perfil patrimonial.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Rede de Especialistas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acesso a contadores, advogados e consultores especializados.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Segurança Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Criptografia ponta a ponta e conformidade total com a LGPD.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Público-Alvo Section */}
      <section id="publico" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Para Quem é o Triad3?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa plataforma atende diferentes perfis de investidores, desde jovens profissionais 
              até aposentados que buscam preservar e fazer crescer seu patrimônio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Jovem Profissional</CardTitle>
                <CardDescription>25-35 anos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Indivíduos em início de carreira que desejam construir uma base financeira sólida 
                  com educação financeira e orientação para primeiros investimentos.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Educação financeira
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Primeiros investimentos
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Metodologia comprovada
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Profissional Liberal</CardTitle>
                <CardDescription>35-50 anos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Indivíduos com alta renda, mas pouco tempo para gestão patrimonial detalhada. 
                  Buscam soluções que simplifiquem a administração de ativos.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Gestão simplificada
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Orientações confiáveis
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Otimização de tempo
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Aposentado</CardTitle>
                <CardDescription>50-65 anos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Pessoas que já acumularam patrimônio significativo e focam na preservação 
                  de capital, renda passiva e planejamento sucessório.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Preservação de capital
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Renda passiva
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Planejamento sucessório
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">O que nossos usuários dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como o Triad3 está transformando a gestão patrimonial de milhares de pessoas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Gestão Simplificada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Finalmente consegui organizar todo meu patrimônio em um só lugar. 
                  A metodologia da Tríade realmente funciona!"
                </p>
                <p className="text-sm text-gray-500">- Maria Silva, Advogada</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Resultados Comprovados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Em 6 meses, consegui diversificar meu portfólio seguindo as recomendações 
                  do sistema. Meu patrimônio cresceu 15%."
                </p>
                <p className="text-sm text-gray-500">- João Santos, Empresário</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Educação Financeira</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Como jovem profissional, aprendi muito sobre investimentos. 
                  O Triad3 me deu a confiança para começar a investir."
                </p>
                <p className="text-sm text-gray-500">- Ana Costa, Engenheira</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu patrimônio em legado?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Junte-se a milhares de pessoas que já estão construindo riqueza 
            com a metodologia da Tríade Patrimonial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-sm transform rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold">TRIAD3</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando patrimônio em legado através da metodologia judaica de prosperidade.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Triad3. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Trash2, Plus, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react'

export default function LojaFemininaSystem() {
  const [sales, setSales] = useState([
    {
      id: 1,
      produto: 'Vestido Floral',
      quantidade: 2,
      valor: 89.90,
      total: 179.80,
      cliente: 'Maria Silva',
      pagamento: 'Crédito',
      parcelas: '3x',
      data: '23/05/2026'
    },
    {
      id: 2,
      produto: 'Blusa Rosa',
      quantidade: 1,
      valor: 49.90,
      total: 49.90,
      cliente: 'Ana Costa',
      pagamento: 'Débito',
      parcelas: '1x',
      data: '23/05/2026'
    }
  ])

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      descricao: 'Aluguel da Loja',
      categoria: 'Aluguel',
      valor: 1500.00
    },
    {
      id: 2,
      descricao: 'Compra de Roupas',
      categoria: 'Estoque',
      valor: 800.00
    }
  ])

  const [newSale, setNewSale] = useState({
    produto: '',
    quantidade: 1,
    valor: 0,
    cliente: '',
    pagamento: 'Dinheiro',
    parcelas: '1x'
  })

  const [expense, setExpense] = useState({
    descricao: '',
    categoria: 'Aluguel',
    valor: 0
  })

  const totalSales = sales.reduce((sum, s) => sum + s.total, 0)
  const totalExpenses = expenses.reduce((sum, e) => sum + e.valor, 0)
  const lucroLiquido = totalSales - totalExpenses

  const addSale = () => {
    if (!newSale.produto || !newSale.cliente || newSale.valor <= 0) {
      alert('Preencha todos os campos da venda!')
      return
    }

    const today = new Date().toLocaleDateString('pt-BR')
    const total = newSale.quantidade * newSale.valor

    setSales([
      ...sales,
      {
        id: Date.now(),
        ...newSale,
        total,
        data: today
      }
    ])

    setNewSale({
      produto: '',
      quantidade: 1,
      valor: 0,
      cliente: '',
      pagamento: 'Dinheiro',
      parcelas: '1x'
    })
  }

  const addExpense = () => {
    if (!expense.descricao || expense.valor <= 0) {
      alert('Preencha todos os campos da despesa!')
      return
    }

    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        ...expense
      }
    ])

    setExpense({
      descricao: '',
      categoria: 'Aluguel',
      valor: 0
    })
  }

  const deleteSale = (id) => {
    setSales(sales.filter(s => s.id !== id))
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="w-8 h-8 text-pink-600" />
            <h1 className="text-4xl font-bold text-pink-700">
              Loja Feminina - Sistema de Vendas
            </h1>
          </div>
          <p className="text-gray-600">Gerencie suas vendas e despesas com facilidade</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-pink-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total de Vendas</p>
                <p className="text-3xl font-bold text-pink-600">R$ {totalSales.toFixed(2)}</p>
              </div>
              <TrendingUp className="w-12 h-12 text-pink-100" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total de Despesas</p>
                <p className="text-3xl font-bold text-red-600">R$ {totalExpenses.toFixed(2)}</p>
              </div>
              <DollarSign className="w-12 h-12 text-red-100" />
            </div>
          </div>

          <div className={`bg-white rounded-2xl shadow p-6 border-l-4 ${lucroLiquido >= 0 ? 'border-green-500' : 'border-orange-500'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Lucro Líquido</p>
                <p className={`text-3xl font-bold ${lucroLiquido >= 0 ? 'text-green-600' : 'text-orange-600'}`}>
                  R$ {lucroLiquido.toFixed(2)}
                </p>
              </div>
              <ShoppingBag className={`w-12 h-12 ${lucroLiquido >= 0 ? 'text-green-100' : 'text-orange-100'}`} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Adicionar Venda */}
          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-pink-700">
              ➕ Adicionar Venda
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome do Produto"
                value={newSale.produto}
                onChange={(e) =>
                  setNewSale({ ...newSale, produto: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <input
                type="text"
                placeholder="Nome do Cliente"
                value={newSale.cliente}
                onChange={(e) =>
                  setNewSale({ ...newSale, cliente: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="Quantidade"
                  value={newSale.quantidade}
                  onChange={(e) =>
                    setNewSale({ ...newSale, quantidade: parseInt(e.target.value) || 1 })
                  }
                  className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <input
                  type="number"
                  placeholder="Valor Unitário"
                  step="0.01"
                  value={newSale.valor}
                  onChange={(e) =>
                    setNewSale({ ...newSale, valor: parseFloat(e.target.value) || 0 })
                  }
                  className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={newSale.pagamento}
                  onChange={(e) =>
                    setNewSale({ ...newSale, pagamento: e.target.value })
                  }
                  className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="Débito">Débito</option>
                  <option value="Crédito">Crédito</option>
                  <option value="PIX">PIX</option>
                </select>

                <input
                  type="text"
                  placeholder="Parcelas (ex: 3x)"
                  value={newSale.parcelas}
                  onChange={(e) =>
                    setNewSale({ ...newSale, parcelas: e.target.value })
                  }
                  className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <button
                onClick={addSale}
                className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-2xl w-full font-semibold flex items-center justify-center gap-2 transition"
              >
                <Plus size={20} />
                Adicionar Venda
              </button>
            </div>

            <div className="space-y-2 max-h-96 overflow-auto mt-6">
              {sales.length === 0 ? (
                <p className="text-center text-gray-400 py-6">Nenhuma venda registrada</p>
              ) : (
                sales.map((s) => (
                  <div
                    key={s.id}
                    className="border border-pink-200 rounded-xl p-3 flex justify-between items-start hover:bg-pink-50 transition"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{s.produto}</p>
                      <p className="text-sm text-gray-500">
                        {s.quantidade} peça(s) • {s.pagamento} • {s.parcelas}
                      </p>
                      <p className="text-xs text-pink-600">
                        Cliente: {s.cliente}
                      </p>
                      <p className="text-xs text-gray-400">{s.data}</p>
                    </div>

                    <div className="text-right flex items-center gap-3">
                      <div>
                        <p className="font-bold text-pink-600">R$ {s.total.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => deleteSale(s.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Adicionar Despesa */}
          <div className="bg-white rounded-3xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4 text-red-700">
              ➕ Adicionar Despesa
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Descrição da Despesa"
                value={expense.descricao}
                onChange={(e) =>
                  setExpense({ ...expense, descricao: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <select
                value={expense.categoria}
                onChange={(e) =>
                  setExpense({ ...expense, categoria: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="Aluguel">Aluguel</option>
                <option value="Estoque">Compra de Estoque</option>
                <option value="Funcionários">Salários</option>
                <option value="Utilidades">Contas/Utilidades</option>
                <option value="Marketing">Marketing</option>
                <option value="Transporte">Transporte</option>
                <option value="Outro">Outro</option>
              </select>

              <input
                type="number"
                placeholder="Valor da Despesa"
                step="0.01"
                value={expense.valor}
                onChange={(e) =>
                  setExpense({ ...expense, valor: parseFloat(e.target.value) || 0 })
                }
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <button
                onClick={addExpense}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl w-full font-semibold flex items-center justify-center gap-2 transition"
              >
                <Plus size={20} />
                Adicionar Despesa
              </button>
            </div>

            <div className="space-y-2 max-h-96 overflow-auto mt-6">
              {expenses.length === 0 ? (
                <p className="text-center text-gray-400 py-6">Nenhuma despesa registrada</p>
              ) : (
                expenses.map((e) => (
                  <div
                    key={e.id}
                    className="border border-red-200 rounded-xl p-3 flex justify-between items-start hover:bg-red-50 transition"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{e.descricao}</p>
                      <p className="text-sm text-gray-500">{e.categoria}</p>
                    </div>

                    <div className="text-right flex items-center gap-3">
                      <p className="font-bold text-red-600">R$ {e.valor.toFixed(2)}</p>
                      <button
                        onClick={() => deleteExpense(e.id)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

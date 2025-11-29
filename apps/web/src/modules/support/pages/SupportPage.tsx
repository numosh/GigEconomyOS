import { useState } from 'react'
import { Shield, Zap, Heart, DollarSign, Clock, TrendingUp, CheckCircle } from 'lucide-react'
import { mockInsurance, mockInstantPay, mockFinancial } from '@shared/data/mockData'
import { useToast } from '@shared/hooks/useToast'

const SupportPage = () => {
  const { showToast, ToastContainer } = useToast()
  const [withdrawAmount, setWithdrawAmount] = useState(500000)
  const [withdrawMethod, setWithdrawMethod] = useState('GoPay')
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(mockInsurance.active.type)
  const [isChangingPlan, setIsChangingPlan] = useState(false)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const calculateFee = (amount: number) => {
    const fee = amount * (mockInstantPay.fee / 100)
    return Math.max(fee, 500)
  }

  const handleWithdraw = async () => {
    if (withdrawAmount < mockInstantPay.minAmount) {
      showToast(`Minimum penarikan ${formatCurrency(mockInstantPay.minAmount)}`, 'error')
      return
    }

    if (withdrawAmount > mockInstantPay.availableBalance) {
      showToast('Saldo tidak mencukupi', 'error')
      return
    }

    setIsWithdrawing(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsWithdrawing(false)
    const fee = calculateFee(withdrawAmount)
    const total = withdrawAmount - fee
    showToast(
      `Penarikan ${formatCurrency(total)} berhasil! Uang akan masuk ke ${withdrawMethod} dalam 15 menit.`,
      'success'
    )
    setWithdrawAmount(500000)
  }

  const handleChangePlan = async (planId: string, planName: string) => {
    setIsChangingPlan(true)
    setSelectedPlan(planId)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsChangingPlan(false)
    showToast(`Berhasil beralih ke paket ${planName}!`, 'success')
  }

  return (
    <div className="space-y-8">
      <ToastContainer />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Support System</h1>
          <p className="text-dark-600">LAYER 2: The Safety Net - Perlindungan dari bencana finansial</p>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="w-8 h-8 text-success" />
            <span className={`text-sm font-bold ${mockFinancial.monthlyIncome.trend === 'up' ? 'text-success' : 'text-danger'}`}>
              {mockFinancial.monthlyIncome.trend === 'up' ? '+' : ''}{mockFinancial.monthlyIncome.percentage}%
            </span>
          </div>
          <h3 className="text-2xl font-bold">{formatCurrency(mockFinancial.monthlyIncome.current)}</h3>
          <p className="text-dark-600 text-sm">Penghasilan Bulan Ini</p>
          <p className="text-xs text-dark-500 mt-1">Rata-rata: {formatCurrency(mockFinancial.monthlyIncome.average)}</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <Shield className="w-8 h-8 text-primary-500" />
            <span className="text-sm font-bold text-success">Active</span>
          </div>
          <h3 className="text-2xl font-bold">{formatCurrency(mockInsurance.active.premium)}</h3>
          <p className="text-dark-600 text-sm">Premi Harian</p>
          <p className="text-xs text-dark-500 mt-1">Cover s/d Rp {(mockInsurance.active.coverage.accident / 1000000).toFixed(0)}jt</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <DollarSign className="w-8 h-8 text-warning" />
            <Zap className="w-5 h-5 text-warning" />
          </div>
          <h3 className="text-2xl font-bold">{formatCurrency(mockInstantPay.availableBalance)}</h3>
          <p className="text-dark-600 text-sm">Saldo Tersedia</p>
          <p className="text-xs text-dark-500 mt-1">Pending: {formatCurrency(mockInstantPay.pendingEarnings)}</p>
        </div>
      </div>

      {/* Active Insurance */}
      <div className="card bg-gradient-to-r from-success/10 to-success/5 border-success/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-success/20 rounded-lg">
              <Shield className="w-8 h-8 text-success" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Asuransi Aktif</h3>
              <p className="text-sm text-dark-600">Daily Protection Plan</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 text-success mb-1">
              <CheckCircle className="w-5 h-5" />
              <span className="font-bold">PROTECTED</span>
            </div>
            <p className="text-xs text-dark-600">
              Valid hingga {new Date(mockInsurance.active.validUntil).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-dark-600 mb-1">Kecelakaan</p>
            <p className="text-lg font-bold text-success">{formatCurrency(mockInsurance.active.coverage.accident)}</p>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-dark-600 mb-1">Medis</p>
            <p className="text-lg font-bold text-success">{formatCurrency(mockInsurance.active.coverage.medical)}</p>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <p className="text-sm text-dark-600 mb-1">Tanggung Jawab</p>
            <p className="text-lg font-bold text-success">{formatCurrency(mockInsurance.active.coverage.liability)}</p>
          </div>
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Pilihan Paket Asuransi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockInsurance.plans.map((plan) => {
            const isActive = selectedPlan === plan.id

            return (
              <div
                key={plan.id}
                className={`p-6 border-2 rounded-xl transition-all ${
                  plan.popular
                    ? 'border-primary-500 bg-primary-500/5'
                    : isActive
                    ? 'border-success bg-success/5'
                    : 'border-dark-200 hover:border-primary-500'
                }`}
              >
                {plan.popular && (
                  <div className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full mb-4">
                    PALING POPULER
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary-500 mb-3">
                  {formatCurrency(plan.premium)}
                </div>
                <p className="text-sm text-dark-600 mb-4">{plan.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-600">Kecelakaan:</span>
                    <span className="font-semibold">{formatCurrency(plan.coverage.accident)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-600">Medis:</span>
                    <span className="font-semibold">{formatCurrency(plan.coverage.medical)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-dark-600">Liability:</span>
                    <span className="font-semibold">{formatCurrency(plan.coverage.liability)}</span>
                  </div>
                </div>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                    isActive
                      ? 'bg-success/20 text-success cursor-default'
                      : isChangingPlan
                      ? 'bg-primary-400 text-white cursor-wait'
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                  onClick={() => !isActive && !isChangingPlan && handleChangePlan(plan.id, plan.name)}
                  disabled={isActive || isChangingPlan}
                >
                  {isActive ? '✓ Paket Aktif' : isChangingPlan ? 'Processing...' : 'Pilih Paket'}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Instant Pay */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <Zap className="w-7 h-7 text-warning mr-2" />
              Instant Pay - Uang Cair 15 Menit
            </h2>
            <p className="text-dark-600 mt-1">Tarik penghasilan kamu sekarang, jangan tunggu seminggu!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/30 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Saldo Tersedia</h3>
              <DollarSign className="w-6 h-6 text-warning" />
            </div>
            <div className="text-4xl font-bold text-warning mb-2">
              {formatCurrency(mockInstantPay.availableBalance)}
            </div>
            <p className="text-sm text-dark-600">Bisa ditarik sekarang</p>
          </div>

          <div className="p-6 bg-dark-50 border border-dark-200 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Pending Settlement</h3>
              <Clock className="w-6 h-6 text-dark-600" />
            </div>
            <div className="text-4xl font-bold text-dark-700 mb-2">
              {formatCurrency(mockInstantPay.pendingEarnings)}
            </div>
            <p className="text-sm text-dark-600">Akan cair dalam 2-3 hari</p>
          </div>
        </div>

        {/* Instant Pay Form */}
        <div className="p-6 bg-primary-500/5 border border-primary-500/30 rounded-xl">
          <h3 className="font-bold mb-4">Tarik Uang Sekarang</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Jumlah Penarikan</label>
              <input
                type="number"
                placeholder="Minimal Rp 10.000"
                className="w-full px-4 py-3 bg-white border border-dark-200 rounded-lg focus:outline-none focus:border-primary-500"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                min={mockInstantPay.minAmount}
                max={mockInstantPay.availableBalance}
              />
              <p className="text-xs text-dark-600 mt-1">
                Fee {mockInstantPay.fee}%: ~{formatCurrency(calculateFee(withdrawAmount))} |
                Diterima: {formatCurrency(withdrawAmount - calculateFee(withdrawAmount))}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Metode Pembayaran</label>
              <select
                className="w-full px-4 py-3 bg-white border border-dark-200 rounded-lg focus:outline-none focus:border-primary-500"
                value={withdrawMethod}
                onChange={(e) => setWithdrawMethod(e.target.value)}
              >
                <option>GoPay</option>
                <option>OVO</option>
                <option>DANA</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <button
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                isWithdrawing
                  ? 'bg-primary-400 text-white cursor-wait'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}
              onClick={handleWithdraw}
              disabled={isWithdrawing}
            >
              <Zap className="w-5 h-5 inline mr-2" />
              {isWithdrawing ? 'Processing...' : 'Tarik Uang (Proses 15 Menit)'}
            </button>
          </div>
        </div>

        {/* History */}
        <div className="mt-6">
          <h3 className="font-bold mb-4">Riwayat Penarikan</h3>
          <div className="space-y-3">
            {mockInstantPay.history.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-dark-50 border border-dark-200 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-success/20 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold">{formatCurrency(item.amount)}</p>
                    <p className="text-sm text-dark-600">{item.method} • {item.requestedAt}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-success">{formatCurrency(item.total)}</p>
                  <p className="text-xs text-dark-600">Fee: {formatCurrency(item.fee)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Health */}
      <div className="card">
        <h2 className="text-2xl font-bold mb-6">Kesehatan Finansial</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Emergency Fund</h3>
              <span className="text-sm text-warning">
                {Math.round((mockFinancial.emergencyFund / mockFinancial.targetEmergencyFund) * 100)}% dari target
              </span>
            </div>
            <div className="h-4 bg-dark-200 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-success to-warning transition-all"
                style={{ width: `${(mockFinancial.emergencyFund / mockFinancial.targetEmergencyFund) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-dark-600">{formatCurrency(mockFinancial.emergencyFund)}</span>
              <span className="text-dark-600">Target: {formatCurrency(mockFinancial.targetEmergencyFund)}</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Monthly Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-dark-600">Income:</span>
                <span className="font-bold text-success">{formatCurrency(mockFinancial.monthlyIncome.current)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-600">Expenses:</span>
                <span className="font-bold text-danger">{formatCurrency(mockFinancial.expenses.total)}</span>
              </div>
              <div className="h-px bg-dark-200 my-2" />
              <div className="flex justify-between">
                <span className="font-bold">Net Savings:</span>
                <span className="font-bold text-success">
                  {formatCurrency(mockFinancial.monthlyIncome.current - mockFinancial.expenses.total)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPage

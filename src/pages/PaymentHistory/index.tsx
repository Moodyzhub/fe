import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Download, FileText, CheckCircle, XCircle, Clock, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const mockPayments = [
    {
        id: 'PAY-2025-001',
        date: '2025-10-20',
        courseName: 'English for Beginners',
        courseId: 1,
        tutor: 'Sarah Johnson',
        amount: 299000,
        currency: 'VND',
        status: 'completed',
        paymentMethod: 'Visa **** 4242',
        transactionId: 'TXN-9876543210',
    },
    {
        id: 'PAY-2025-002',
        date: '2025-10-18',
        courseName: 'Spanish Conversation',
        courseId: 2,
        tutor: 'Carlos Rodriguez',
        amount: 399000,
        currency: 'VND',
        status: 'completed',
        paymentMethod: 'Mastercard **** 5555',
        transactionId: 'TXN-9876543211',
    },
    {
        id: 'PAY-2025-003',
        date: '2025-10-15',
        courseName: 'Japanese Writing Systems',
        courseId: 3,
        tutor: 'Yuki Tanaka',
        amount: 499000,
        currency: 'VND',
        status: 'completed',
        paymentMethod: 'Visa **** 4242',
        transactionId: 'TXN-9876543212',
    },
    {
        id: 'PAY-2025-004',
        date: '2025-10-10',
        courseName: 'French Pronunciation',
        courseId: 4,
        tutor: 'Marie Dubois',
        amount: 349000,
        currency: 'VND',
        status: 'pending',
        paymentMethod: 'Visa **** 4242',
        transactionId: 'TXN-9876543213',
    },
    {
        id: 'PAY-2025-005',
        date: '2025-10-01',
        courseName: 'German Grammar Advanced',
        courseId: 5,
        tutor: 'Hans Mueller',
        amount: 449000,
        currency: 'VND',
        status: 'failed',
        paymentMethod: 'Mastercard **** 5555',
        transactionId: 'TXN-9876543214',
    },
];

const PaymentHistory = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const filteredPayments = mockPayments.filter((payment) => {
        const matchesSearch =
            payment.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            payment.tutor.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesStatus = statusFilter === 'all' || payment.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const stats = {
        total: mockPayments.filter(p => p.status === 'completed').length,
        totalAmount: mockPayments
            .filter(p => p.status === 'completed')
            .reduce((sum, p) => sum + p.amount, 0),
        pending: mockPayments.filter(p => p.status === 'pending').length,
        failed: mockPayments.filter(p => p.status === 'failed').length,
    };

    const formatCurrency = (amount: number, currency: string) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: currency,
        }).format(amount);
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-5 h-5 text-green-600" />;
            case 'pending':
                return <Clock className="w-5 h-5 text-orange-600" />;
            case 'failed':
                return <XCircle className="w-5 h-5 text-red-600" />;
            default:
                return null;
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'completed':
                return <Badge className="bg-green-100 text-green-700">Completed</Badge>;
            case 'pending':
                return <Badge className="bg-orange-100 text-orange-700">Pending</Badge>;
            case 'failed':
                return <Badge className="bg-red-100 text-red-700">Failed</Badge>;
            default:
                return null;
        }
    };

    const handleDownloadReceipt = (paymentId: string) => {
        console.log('Downloading receipt for:', paymentId);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Payment History</h1>
                    <p className="text-gray-600">View and manage your payment transactions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Total Payments</p>
                                    <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Total Spent</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {formatCurrency(stats.totalAmount, 'VND')}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Pending</p>
                                    <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
                                </div>
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Failed</p>
                                    <p className="text-3xl font-bold text-red-600">{stats.failed}</p>
                                </div>
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                                    <XCircle className="w-6 h-6 text-red-600" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Card className="bg-white shadow-sm mb-6">
                    <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <CardTitle>Transaction History</CardTitle>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1 sm:flex-initial">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <Input
                                        placeholder="Search payments..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10 w-full sm:w-64"
                                    />
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="gap-2">
                                            <Filter className="w-4 h-4" />
                                            {statusFilter === 'all' ? 'All Status' : statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => setStatusFilter('all')}>
                                            All Status
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setStatusFilter('completed')}>
                                            Completed
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setStatusFilter('pending')}>
                                            Pending
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setStatusFilter('failed')}>
                                            Failed
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {filteredPayments.map((payment) => (
                                <div
                                    key={payment.id}
                                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                        <div className="flex items-start gap-4 flex-1">
                                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                {getStatusIcon(payment.status)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="font-semibold text-gray-900 truncate">
                                                        {payment.courseName}
                                                    </h3>
                                                    {getStatusBadge(payment.status)}
                                                </div>
                                                <div className="space-y-1 text-sm text-gray-600">
                                                    <p>Tutor: {payment.tutor}</p>
                                                    <p>Payment ID: {payment.id}</p>
                                                    <p>Transaction ID: {payment.transactionId}</p>
                                                    <p>Payment Method: {payment.paymentMethod}</p>
                                                    <p>Date: {new Date(payment.date).toLocaleDateString('vi-VN', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:border-l lg:border-gray-200 lg:pl-6">
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-gray-900">
                                                    {formatCurrency(payment.amount, payment.currency)}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                {payment.status === 'completed' && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => handleDownloadReceipt(payment.id)}
                                                    >
                                                        <Download className="w-4 h-4 mr-2" />
                                                        Receipt
                                                    </Button>
                                                )}
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link to={`/courses/${payment.courseId}`}>
                                                        <FileText className="w-4 h-4 mr-2" />
                                                        View Course
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredPayments.length === 0 && (
                            <div className="text-center py-12">
                                <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No payments found</h3>
                                <p className="text-gray-600">
                                    {searchQuery
                                        ? 'Try adjusting your search criteria'
                                        : "You haven't made any payments yet"}
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PaymentHistory;

import { Item } from '@frontend-types/item.interface';
import { Table } from 'antd';

type TableSummaryProps = {
    data: Item[] | null;
};

function TableSummary({ data }: TableSummaryProps): JSX.Element {
    let totals = {
        stock: 0,
        delivery: 0,
        amount: 0
    }

    if (data) {
        totals = data.reduce((acc, { stock, delivery, amount }) => ({
            ...acc,
            stock: (acc.stock || 0) + stock,
            delivery: (acc.delivery || 0) + delivery,
            amount: (acc.amount || 0) + amount,
        }), totals);
    }

    const formattedTotal = {
        stock:totals.stock.toLocaleString('de-DE'),
        delivery:totals.delivery.toLocaleString('de-DE'),
        amount:totals.amount.toLocaleString('de-DE'),
    }

    return (
            <Table.Summary.Row className='table__summary-row'>
                <Table.Summary.Cell index={0} colSpan={4}>
                    Итого:
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1} className='table__summary-total'>{formattedTotal.stock}</Table.Summary.Cell>
                <Table.Summary.Cell index={2} className='table__summary-total'>{formattedTotal.delivery}</Table.Summary.Cell>
                <Table.Summary.Cell index={3} className='table__summary-total'>{formattedTotal.amount}</Table.Summary.Cell>
            </Table.Summary.Row>
    );
}
export default TableSummary;

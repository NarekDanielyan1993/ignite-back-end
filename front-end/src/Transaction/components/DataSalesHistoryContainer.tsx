import React, {FunctionComponent, Fragment} from "react";
import {inject, observer} from "mobx-react";
import {Card, CardHeader, CardContent, Grid, CircularProgress, Typography} from "@material-ui/core";
import {TransactionsTable} from "./TransactionsTable";
import {DataValidatorAccountSelect} from "../../Account";
import {ApiError} from "../../api";
import {AccountResponse, TransactionResponse} from "../../models";
import {IAppState} from "../../store";

interface DataSalesHistoryContainerMobxProps {
    selectedAccount?: string,
    accounts: string[],
    pending: boolean,
    error?: ApiError,
    transactions: TransactionResponse[],
    selectAccount: (address: string) => void,
    fetchTransactions: () => void
}

const _DataSalesHistoryContainer: FunctionComponent<DataSalesHistoryContainerMobxProps> = ({
    selectedAccount,
    accounts,
    pending,
    error,
    transactions,
    selectAccount,
    fetchTransactions
}) => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <DataValidatorAccountSelect accounts={accounts}
                                        onSelect={selectAccount}
                                        selectedAccount={selectedAccount}
            />
        </Grid>
        <Grid item xs={12}>
            {transactions.length === 0 && error && (
                <Typography variant="h1">
                    Error occurred when tried to fetch transactions
                </Typography>
            )}
            <Card>
                <CardHeader title="Data Sales"/>
                <CardContent>
                    <TransactionsTable transactions={transactions}
                                       pending={pending}
                                       onFetchMoreRequest={fetchTransactions}
                    />
                </CardContent>
            </Card>
        </Grid>
    </Grid>
);

const mapMobxToProps = (state: IAppState): DataSalesHistoryContainerMobxProps => ({
    accounts: state.accounts.accounts.map(account => account.address),
    selectAccount: state.transactions.setSelectedAccount,
    selectedAccount: state.transactions.selectedAccount,
    error: state.transactions.error,
    fetchTransactions: state.transactions.fetchTransactions,
    pending: state.transactions.pending,
    transactions: state.transactions.transactions
});

export const DataSalesHistoryContainer = inject(mapMobxToProps)(observer(_DataSalesHistoryContainer) as FunctionComponent<{}>);
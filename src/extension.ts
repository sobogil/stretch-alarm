import * as vscode from 'vscode';

let intervalId: NodeJS.Timeout | null = null;
let messages: string[] = [
    '⏰스트레칭 시간입니다. 일어서서 간단히 스트레칭을 하세요.',
    '💪스트레칭 시간! 건강을 위해 잠깐 일어나세요.',
    '🏋️‍♀️잠깐 스트레칭을 하고 오세요. 몸과 마음이 가벼워질 거예요.'
];

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension is now active!');
    vscode.window.showInformationMessage('⚠️스트레칭 알람이 실행 됐습니다. 설정된 시간마다 알람이 울릴 것입니다.');

    let disposable = vscode.commands.registerCommand('extension.stretch', () => {
        if (intervalId) {
            clearInterval(intervalId);
            vscode.window.showInformationMessage('⏰스트레칭 알람이 종료되었습니다.');
        } else {
            const stretchingAlert = () => {
                const message = messages[Math.floor(Math.random() * messages.length)];
                vscode.window.showInformationMessage(message, '예', '아니오')
                    .then(selection => {
                        if (selection === '예') {
                            vscode.window.showInformationMessage('💪현명한 선택입니다. 당신은 방금 거북목, 골반 비대칭, 일자목 등 안좋은 척추 질환을 예방하였으며 앞으로 오래오래 잘 살 수 있을 것입니다.');
                            vscode.env.openExternal(vscode.Uri.parse('https://www.youtube.com/watch?v=WsW5eFmdEuk')); //스트레칭 영상 링크
                        } else {
                            vscode.window.showInformationMessage('😡😡😡스트레칭을 하지 않으신다고요? 오랜 시간 한자세를 유지하면서 당신의 근육 및 관절 건강은 상태가 매우 안좋은 상태입니다. 만약 당신이 이글을 읽고도 일어서지 않을 시 근육 경직 및 불편함, 관절통증, 잘못된 자세로 인한 퇴행성 변화, 스트레스 증가, 운동 성능 저하가 될 것이며 당신은 나중에 평생 후회하면서 살아 갈 것입니다.')
                        }
                    });
            };

            // 즉시 알람 실행
            stretchingAlert();

            // 설정한 시간 간격으로 알람 반복 실행
            const interval = vscode.workspace.getConfiguration().get<number>('stretch.interval', 60);
            intervalId = setInterval(stretchingAlert, interval * 60000);  // 사용자가 설정한 시간마다 알람
            vscode.window.showInformationMessage(`⏰스트레칭 알람이 ${interval}분 간격으로 설정되었습니다.`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    if (intervalId) {
        clearInterval(intervalId);
        vscode.window.showInformationMessage('⏰스트레칭 알람이 종료되었습니다.');
    }
}

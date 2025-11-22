---
url: /faq/bugcheck-codes.md
---
![蓝屏](/images/bugcheck-codes/1.webp)

下表中列出了Windows常见的蓝屏错误代码（BugcheckCode），您可以使用`Ctrl + F`来检索代码。

此表格来源于[完美代码](https://www.perfcode.com/windows/bsod/bugcheck-codes)，在此表示感谢！

| 代码       | 名称                                                     | 描述                                                           |
| ---------- | -------------------------------------------------------- | ------------------------------------------------------------  |
| 0x00000001 | APC\_INDEX\_MISMATCH                                       | 异步过程调用 (APC) 状态索引不匹配                               |
| 0x00000002 | DEVICE\_QUEUE\_NOT\_BUSY                                    | 设备队列不忙                                                   |
| 0x00000003 | INVALID\_AFFINITY\_SET                                     | 无效的CPU亲合性设置                                            |
| 0x00000004 | INVALID\_DATA\_ACCESS\_TRAP                                 | 数据访问陷阱不正确                                             |
| 0x00000005 | INVALID\_PROCESS\_ATTACH\_ATTEMPT                           | 线程在不允许的情况下附加到进程                                  |
| 0x00000006 | INVALID\_PROCESS\_DETACH\_ATTEMPT                           | 线程在不允许的情况下脱离进程                                    |
| 0x00000007 | INVALID\_SOFTWARE\_INTERRUPT                               | 发生了一个无效的软件中断                                        |
| 0x00000008 | IRQL\_NOT\_DISPATCH\_LEVEL                                  | 代码在一个过低的IRQL级别上运行                                  |
| 0x00000009 | IRQL\_NOT\_GREATER\_OR\_EQUAL                                | 高IRQL程序尝试访问了分页内存                                    |
| 0x0000000A | IRQL\_NOT\_LESS\_OR\_EQUAL                                   | 在提高中断请求级别时，访问了无效地址                             |
| 0x0000000B | NO\_EXCEPTION\_HANDLING\_SUPPORT                            | 系统在处理异常时遇到了问题                                      |
| 0x0000000C | MAXIMUM\_WAIT\_OBJECTS\_EXCEEDED                            | 线程等待的对象数量超过了系统允许的最大值                         |
| 0x0000000D | MUTEX\_LEVEL\_NUMBER\_VIOLATION                             | 互斥体层级编号违规                                             |
| 0x0000000E | NO\_USER\_MODE\_CONTEXT                                     | 在启动系统线程的过程中，如果控制从初始线程过程返回，则会发生此错误 |
| 0x0000000F | SPIN\_LOCK\_ALREADY\_OWNED                                  | 这表示在已拥有自旋锁的情况下启动了对自旋锁的请求。               |
| 0x00000010 | SPIN\_LOCK\_NOT\_OWNED                                      | 线程试图释放未持有的自旋锁                                    |
| 0x00000011 | THREAD\_NOT\_MUTEX\_OWNER                                   | 线程试图释放未持有的互斥锁                                    |
| 0x00000012 | TRAP\_CAUSE\_UNKNOWN                                       | CPU无法识别异常                                              |
| 0x00000013 | EMPTY\_THREAD\_REAPER\_LIST                                 | 系统内部线程回收列表为空（目前未使用）                         |
| 0x00000014 | CREATE\_DELETE\_LOCK\_NOT\_LOCKED                            | 创建-删除锁未锁定                                             |
| 0x00000015 | LAST\_CHANCE\_CALLED\_FROM\_KMODE                            | 内核模式代码发生了未处理异常                                  |
| 0x00000016 | CID\_HANDLE\_CREATION                                      | 客户端ID句柄创建失败                                          |
| 0x00000017 | CID\_HANDLE\_DELETION                                      | 客户端ID句柄删除失败                                          |
| 0x00000018 | REFERENCE\_BY\_POINTER                                     | 这表示对象的引用计数对于对象的当前状态是非法的。               |
| 0x00000019 | BAD\_POOL\_HEADER                                          | 这表示池标头已损坏。                                         |
| 0x0000001A | MEMORY\_MANAGEMENT                                        | 发生了严重的内存管理错误。                                   |
| 0x0000001B | PFN\_SHARE\_COUNT                                          | 物理页面共享计数不一致（目前未使用）                          |
| 0x0000001C | PFN\_REFERENCE\_COUNT                                      | 检测到引用计数错误                                           |
| 0x0000001D | NO\_SPIN\_LOCK\_AVAILABLE                                   | 自旋锁资源耗尽                                               |
| 0x0000001E | KMODE\_EXCEPTION\_NOT\_HANDLED                              | 内核模式应用程序产生了错误处理程序未捕获到的异常               |
| 0x0000001F | SHARED\_RESOURCE\_CONV\_ERROR                               | 共享资源转换错误                                            |
| 0x00000020 | KERNEL\_APC\_PENDING\_DURING\_EXIT                           | 线程退出时，异步过程调用 (APC) 仍处于待处理状态                |
| 0x00000021 | QUOTA\_UNDERFLOW                                          | 进程资源配额计数器下溢                                        |
| 0x00000022 | FILE\_SYSTEM                                              | 文件系统错误                                                 |
| 0x00000023 | FAT\_FILE\_SYSTEM                                          | 这表明 FAT 文件系统出现了问题。                              |
| 0x00000024 | NTFS\_FILE\_SYSTEM                                         | 这表明 ntfs.sys 出现了问题，该驱动文件允许系统读写 NTFS 驱动器 |
| 0x00000025 | NPFS\_FILE\_SYSTEM                                         | 这表明 NPFS 文件系统出现了问题                               |
| 0x00000026 | CDFS\_FILE\_SYSTEM                                         | 这表明 CD 文件系统出现了问题                                 |
| 0x00000027 | RDR\_FILE\_SYSTEM                                          | 表明 SMB 重定向文件系统中出现了问题                          |
| 0x00000028 | CORRUPT\_ACCESS\_TOKEN                                     | 访问令牌损坏                                                 |
| 0x00000029 | SECURITY\_SYSTEM                                          | 安全系统错误                                                 |
| 0x0000002A | INCONSISTENT\_IRP                                         | 这表示发现 IRP 包含不一致的信息                              |
| 0x0000002B | PANIC\_STACK\_SWITCH                                       | 这表示内核模式堆栈已溢出                                     |
| 0x0000002C | PORT\_DRIVER\_INTERNAL                                     | 端口驱动程序内部错误                                        |
| 0x0000002D | SCSI\_DISK\_DRIVER\_INTERNAL                                | SCSI磁盘驱动程序内部错误                                    |
| 0x0000002E | DATA\_BUS\_ERROR                                           | 这通常表示检测到系统内存中的奇偶校验错误                     |
| 0x0000002F | INSTRUCTION\_BUS\_ERROR                                    | 指令总线错误                                                |
| 0x00000030 | SET\_OF\_INVALID\_CONTEXT                                   | 这表明陷阱帧中的堆栈指针值无效                               |
| 0x00000031 | PHASE0\_INITIALIZATION\_FAILED                             | 这表明系统初始化失败                                         |
| 0x00000032 | PHASE1\_INITIALIZATION\_FAILED                             | 这表明系统初始化失败                                         |
| 0x00000033 | UNEXPECTED\_INITIALIZATION\_CALL                           | 发生了一个意外的初始化调用                                   |
| 0x00000034 | CACHE\_MANAGER                                            | 这表明文件系统的缓存管理器出现了问题                         |
| 0x00000035 | NO\_MORE\_IRP\_STACK\_LOCATIONS                              | I/O请求包（IRP）栈耗尽                                       |
| 0x00000036 | DEVICE\_REFERENCE\_COUNT\_NOT\_ZERO                          | 这表示驱动程序尝试删除仍具有正引用计数的设备对象             |
| 0x00000037 | FLOPPY\_INTERNAL\_ERROR                                    | 软盘驱动程内部错误                                          |
| 0x00000038 | SERIAL\_DRIVER\_INTERNAL                                   | 串行驱动程序内部错误                                        |
| 0x00000039 | SYSTEM\_EXIT\_OWNED\_MUTEX                                  | 这表明工作例程返回时没有释放它所拥有的互斥锁                 |
| 0x0000003A | SYSTEM\_UNWIND\_PREVIOUS\_USER                              | 这表示在执行从特权代码转换为非特权代码的例程时发生了异常     |
| 0x0000003B | SYSTEM\_SERVICE\_EXCEPTION                                 | 这表示在执行从非特权代码转换为特权代码的例程时发生了异常     |
| 0x0000003C | INTERRUPT\_UNWIND\_ATTEMPTED                               | 发生了在中断上下文中的非法堆栈回退尝试                       |
| 0x0000003D | INTERRUPT\_EXCEPTION\_NOT\_HANDLED                          | 这表明内核中断对象中断管理的异常处理程序无法处理生成的异常   |
| 0x0000003E | MULTIPROCESSOR\_CONFIGURATION\_NOT\_SUPPORTED               | 这表明系统有多个处理器，但它们彼此之间不对称                 |
| 0x0000003F | NO\_MORE\_SYSTEM\_PTES                                      | 这是系统执行过多 I/O 操作的结果。 这导致了系统页表条目 (PTE) 碎片化 |
| 0x00000040 | TARGET\_MDL\_TOO\_SMALL                                     | 这表明驱动程序未正确使用 IoBuildPartialMdl                   |
| 0x00000041 | MUST\_SUCCEED\_POOL\_EMPTY                                  | 这表示内核模式线程请求了太多必须成功的池                     |
| 0x00000042 | ATDISK\_DRIVER\_INTERNAL                                   | ATDISK 驱动程序内部错误（现已停用）                        |
| 0x00000043 | NO\_SUCH\_PARTITION                                        | 系统引导分区丢失或损坏                                        |
| 0x00000044 | MULTIPLE\_IRP\_COMPLETE\_REQUESTS                           | 这表示驱动程序已试图请求完成一个已完成的 IRP                 |
| 0x00000045 | INSUFFICIENT\_SYSTEM\_MAP\_REGS                             | 系统映射寄存器不足                                         |
| 0x00000046 | DEREF\_UNKNOWN\_LOGON\_SESSION                              | 系统访问了无效的登录会话                                    |
| 0x00000047 | REF\_UNKNOWN\_LOGON\_SESSION                                | 系统引用了无效的登录会话                                     |
| 0x00000048 | CANCEL\_STATE\_IN\_COMPLETED\_IRP                            | 这表明 I/O 请求数据包 (IRP) 已完成，随后被取消               |
| 0x00000049 | PAGE\_FAULT\_WITH\_INTERRUPTS\_OFF                           | 中断关闭时发生页错误                                        |
| 0x0000004A | IRQL\_GT\_ZERO\_AT\_SYSTEM\_SERVICE                           | 这表示当线程的 IRQL 仍高于PASSIVE\_LEVEL时，线程正从系统调用返回到用户模式 |
| 0x0000004B | STREAMS\_INTERNAL\_ERROR                                   | 数据流处理机制内部错误(现已停用)                                        |
| 0x0000004C | FATAL\_UNHANDLED\_HARD\_ERROR                               | 致命的未处理硬件错误                                         |
| 0x0000004D | NO\_PAGES\_AVAILABLE                                       | 这表示没有可用页面来继续操作                                 |
| 0x0000004E | PFN\_LIST\_CORRUPT                                         | 这表示页框号 (PFN) 列表已损坏                                |
| 0x0000004F | NDIS\_INTERNAL\_ERROR                                      | 网络驱动接口规范内部错误                                     |
| 0x00000050 | PAGE\_FAULT\_IN\_NONPAGED\_AREA                              | 这表明引用了无效的系统内存                                   |
| 0x00000051 | REGISTRY\_ERROR                                           | 这表示发生了严重的注册表错误                                  |
| 0x00000052 | MAILSLOT\_FILE\_SYSTEM                                     | 邮槽文件系统错误(现已停用)                                    |
| 0x00000053 | NO\_BOOT\_DEVICE                                           | 系统未找到可引导设备                                          |
| 0x00000054 | LM\_SERVER\_INTERNAL\_ERROR                                 | LanMan 服务器内部错误                                         |
| 0x00000055 | DATA\_COHERENCY\_EXCEPTION                                 | 缓存数据一致性异常                                            |
| 0x00000056 | INSTRUCTION\_COHERENCY\_EXCEPTION                          | 指令一致性异常                                                |
| 0x00000057 | XNS\_INTERNAL\_ERROR                                       | Xerox网络系统内部错误(现已停用)                                |
| 0x00000058 | FTDISK\_INTERNAL\_ERROR                                    | 如果系统从镜像分区的错误副本启动，则会出现此问题                |
| 0x00000059 | PINBALL\_FILE\_SYSTEM                                      | 这表明 Pinball 文件系统出现了问题                             |
| 0x0000005A | CRITICAL\_SERVICE\_FAILED                                  | 关键服务意外终止                                               |
| 0x0000005B | SET\_ENV\_VAR\_FAILED                                       | 设置环境变量失败                                               |
| 0x0000005C | HAL\_INITIALIZATION\_FAILED                                | 这表明 HAL 初始化失败                                         |
| 0x0000005D | UNSUPPORTED\_PROCESSOR                                    | 这表明计算机正尝试在不受支持的处理器上运行 Windows              |
| 0x0000005E | OBJECT\_INITIALIZATION\_FAILED                             | 对象初始化失败                                                |
| 0x0000005F | SECURITY\_INITIALIZATION\_FAILED                           | 安全子系统初始化失败                                           |
| 0x00000060 | PROCESS\_INITIALIZATION\_FAILED                            | 进程初始化失败                                                 |
| 0x00000061 | HAL1\_INITIALIZATION\_FAILED                               | 硬件抽象层第一阶段初始化失败                                   |
| 0x00000062 | OBJECT1\_INITIALIZATION\_FAILED                            | 对象第一阶段初始化失败                                         |
| 0x00000063 | SECURITY1\_INITIALIZATION\_FAILED                          | 安全第一阶段初始化失败                                         |
| 0x00000064 | SYMBOLIC\_INITIALIZATION\_FAILED                           | 符号链接初始化失败                                             |
| 0x00000065 | MEMORY1\_INITIALIZATION\_FAILED                            | 内存第一阶段初始化失败                                          |
| 0x00000066 | CACHE\_INITIALIZATION\_FAILED                              | 缓存初始化失败                                                |
| 0x00000067 | CONFIG\_INITIALIZATION\_FAILED                             | 注册表配置失败                                               |
| 0x00000068 | FILE\_INITIALIZATION\_FAILED                               | 文件初始化失败                                               |
| 0x00000069 | IO1\_INITIALIZATION\_FAILED                                | I/O 系统的初始化由于某种原因失败                             |
| 0x0000006A | LPC\_INITIALIZATION\_FAILED                                | 本地过程调用初始化失败                                       |
| 0x0000006B | PROCESS1\_INITIALIZATION\_FAILED                           | 操作系统的初始化失败                                         |
| 0x0000006C | REFMON\_INITIALIZATION\_FAILED                             | 引用监视器初始化失败                                         |
| 0x0000006D | SESSION1\_INITIALIZATION\_FAILED                           | 操作系统的初始化失败                                         |
| 0x0000006E | SESSION2\_INITIALIZATION\_FAILED                           | 操作系统的初始化失败                                         |
| 0x0000006F | SESSION3\_INITIALIZATION\_FAILED                           | 操作系统的初始化失败                                         |
| 0x00000070 | SESSION4\_INITIALIZATION\_FAILED                           | 操作系统的初始化失败                                         |
| 0x00000071 | SESSION5\_INITIALIZATION\_FAILED                           | 操作系统的初始化失败                                         |
| 0x00000072 | ASSIGN\_DRIVE\_LETTERS\_FAILED                              | 分配驱动器号失败                                             |
| 0x00000073 | CONFIG\_LIST\_FAILED                                       | 顶级注册表项之一无法在注册表树中链接                         |
| 0x00000074 | BAD\_SYSTEM\_CONFIG\_INFO                                   | 注册表中存在错误                                             |
| 0x00000075 | CANNOT\_WRITE\_CONFIGURATION                               | SYSTEM 注册表配置单元文件无法转换为映射文件                  |
| 0x00000076 | PROCESS\_HAS\_LOCKED\_PAGES                                 | 驱动程序在 I/O 操作后未能释放锁定的页面，或者它试图解锁已解锁的页面 |
| 0x00000077 | KERNEL\_STACK\_INPAGE\_ERROR                                | 无法将分页文件中请求的内核数据页读入内存                     |
| 0x00000078 | PHASE0\_EXCEPTION                                         | HAL 初始化期间遇到意外中断                                   |
| 0x00000079 | MISMATCHED\_HAL                                           | 硬件抽象层 (HAL) 修订级别或配置与内核或计算机的版本不匹配    |
| 0x0000007A | KERNEL\_DATA\_INPAGE\_ERROR                                 | 无法将分页文件中请求的内核数据页读入内存                     |
| 0x0000007B | INACCESSIBLE\_BOOT\_DEVICE                                 | 系统在启动期间失去了对系统分区的访问权限                     |
| 0x0000007C | BUGCODE\_NDIS\_DRIVER                                      | 操作系统检测到网络驱动程序中错误                             |
| 0x0000007D | INSTALL\_MORE\_MEMORY                                      | 没有足够的内存来启动操作系统                                 |
| 0x0000007E | SYSTEM\_THREAD\_EXCEPTION\_NOT\_HANDLED                      | 系统线程产生了错误处理程序未捕获的异常                       |
| 0x0000007F | UNEXPECTED\_KERNEL\_MODE\_TRAP                              | 表明 Intel CPU 生成了陷阱，而内核未能捕获此陷阱              |
| 0x00000080 | NMI\_HARDWARE\_FAILURE                                     | 发生了硬件故障                                               |
| 0x00000081 | SPIN\_LOCK\_INIT\_FAILURE                                   | 自旋锁初始化失败                                             |
| 0x00000082 | DFS\_FILE\_SYSTEM                                          | 分布式文件系统错误                                           |
| 0x00000085 | SETUP\_FAILURE                                            | 安装过程中发生了致命错误                                     |
| 0x0000008B | MBR\_CHECKSUM\_MISMATCH                                    | MBR 校验和中出现了不匹配                                     |
| 0x0000008E | KERNEL\_MODE\_EXCEPTION\_NOT\_HANDLED                        | 内核模式应用程序产生了错误处理程序未捕获到的异常             |
| 0x0000008F | PP0\_INITIALIZATION\_FAILED                                | 无法初始化即插即用 (PnP) 管理器                              |
| 0x00000090 | PP1\_INITIALIZATION\_FAILED                                | 无法初始化即插即用 (PnP) 管理器                              |
| 0x00000092 | UP\_DRIVER\_ON\_MP\_SYSTEM                                   | 多处理器系统上加载了仅单处理器驱动程序                       |
| 0x00000093 | INVALID\_KERNEL\_HANDLE                                    | 无效或受保护的句柄已传递给 NtClose                           |
| 0x00000094 | KERNEL\_STACK\_LOCKED\_AT\_EXIT                              | 线程在内核堆栈标记为不可交换时退出                           |
| 0x00000096 | INVALID\_WORK\_QUEUE\_ITEM                                  | 已删除包含 NULL 指针的队列条目                               |
| 0x00000097 | BOUND\_IMAGE\_UNSUPPORTED                                  | 驱动程序绑定状态不受支持                                     |
| 0x00000098 | END\_OF\_NT\_EVALUATION\_PERIOD                              | 系统的试用期已结束                                          |
| 0x00000099 | INVALID\_REGION\_OR\_SEGMENT                                | 无效的区域或段                                               |
| 0x0000009A | SYSTEM\_LICENSE\_VIOLATION                                 | 违反了软件许可协议                                           |
| 0x0000009B | UDFS\_FILE\_SYSTEM                                         | UDF 文件系统中出现了问题                                     |
| 0x0000009C | MACHINE\_CHECK\_EXCEPTION                                  | 发生了致命的计算机检查异常                                   |
| 0x0000009E | USER\_MODE\_HEALTH\_MONITOR                                 | 一个或多个关键用户模式组件未能满足运行状况检查               |
| 0x0000009F | DRIVER\_POWER\_STATE\_FAILURE                               | 驱动程序处于不一致或无效的电源状态                           |
| 0x000000A0 | INTERNAL\_POWER\_ERROR                                     | 电源策略管理器遇到致命错误                                   |
| 0x000000A1 | PCI\_BUS\_DRIVER\_INTERNAL                                  | PCI 总线驱动程序检测到其内部结构中存在不一致问题，无法继续运行 |
| 0x000000A2 | MEMORY\_IMAGE\_CORRUPT                                     | 内存中可执行文件的映像出现损坏                               |
| 0x000000A3 | ACPI\_DRIVER\_INTERNAL                                     | ACPI 驱动程序检测到内部不一致                                |
| 0x000000A4 | CNSS\_FILE\_SYSTEM\_FILTER                                  | CNSS 文件系统筛选器中出现了问题                              |
| 0x000000A5 | ACPI\_BIOS\_ERROR                                          | 计算机的高级配置和电源接口 (ACPI) BIOS 不完全符合 ACPI 规范  |
| 0x000000A7 | BAD\_EXHANDLE                                             | 内核模式句柄表检测到句柄表条目状态不一致                     |
| 0x000000AC | HAL\_MEMORY\_ALLOCATION                                    | 硬件抽象层 (HAL) 无法获取足够的内存                          |
| 0x000000AD | VIDEO\_DRIVER\_DEBUG\_REPORT\_REQUEST                        | 视频端口在运行时代表视频驱动程序创建了一个非致命的小型转储    |
| 0x000000B1 | BGI\_DETECTED\_VIOLATION                                   | 后台智能检测服务检测到违规                                   |
| 0x000000B4 | VIDEO\_DRIVER\_INIT\_FAILURE                                | 这表明 Windows 无法进入图形模式                              |
| 0x000000B8 | ATTEMPTED\_SWITCH\_FROM\_DPC                                | 延迟过程调用 （DPC） 例程尝试了非法操作                      |
| 0x000000B9 | CHIPSET\_DETECTED\_ERROR                                   | 芯片组检测到错误                                           |
| 0x000000BA | SESSION\_HAS\_VALID\_VIEWS\_ON\_EXIT                          | 这表示卸载会话时，会话驱动程序仍具有映射视图                 |
| 0x000000BB | NETWORK\_BOOT\_INITIALIZATION\_FAILED                       | 这表示 Windows 未能成功从网络启动                            |
| 0x000000BC | NETWORK\_BOOT\_DUPLICATE\_ADDRESS                           | 这表示在从网络启动时向该计算机分配了重复的 IP 地址           |
| 0x000000BD | INVALID\_HIBERNATED\_STATE                                 | 这表示休眠的内存映像与当前硬件配置不匹配                     |
| 0x000000BE | ATTEMPTED\_WRITE\_TO\_READONLY\_MEMORY                       | 驱动程序试图写入只读内存段                                   |
| 0x000000BF | MUTEX\_ALREADY\_OWNED                                      | 这表示线程试图获取其已拥有的互斥体的所有权                   |
| 0x000000C1 | SPECIAL\_POOL\_DETECTED\_MEMORY\_CORRUPTION                  | 这表示驱动程序写入了特殊池的无效部分                         |
| 0x000000C2 | BAD\_POOL\_CALLER                                          | 这表示当前线程正在发出错误的池请求                           |
| 0x000000C4 | DRIVER\_VERIFIER\_DETECTED\_VIOLATION                       | 驱动程序验证程序发现的严重错误                               |
| 0x000000C5 | DRIVER\_CORRUPTED\_EXPOOL                                  | 系统试图访问进程 IRQL 过高的无效内存                         |
| 0x000000C6 | DRIVER\_CAUGHT\_MODIFYING\_FREED\_POOL                       | 这表示驱动程序试图访问已释放的内存池                         |
| 0x000000C7 | TIMER\_OR\_DPC\_INVALID                                     | 如果在不允许内核计时器或延迟过程调用（DPC）的某个位置找到，则会发出此问题 |
| 0x000000C8 | IRQL\_UNEXPECTED\_VALUE                                    | IRQL意外值                                                    |
| 0x000000C9 | DRIVER\_VERIFIER\_IOMANAGER\_VIOLATION                      | 驱动程序验证程序 I/O 验证违规                                |
| 0x000000CA | PNP\_DETECTED\_FATAL\_ERROR                                 | 这表示即插即用管理器遇到严重错误，可能是由于有问题的即插即用驱动程序造成的 |
| 0x000000CB | DRIVER\_LEFT\_LOCKED\_PAGES\_IN\_PROCESS                      | 这表示驱动程序或 I/O 管理器在 I/O 操作后未能释放锁定的页面   |
| 0x000000CC | PAGE\_FAULT\_IN\_FREED\_SPECIAL\_POOL                         | 这表示系统引用了先前释放的内存                               |
| 0x000000CD | PAGE\_FAULT\_BEYOND\_END\_OF\_ALLOCATION                      | 这表示系统访问的内存超出了某个驱动程序池分配的上限           |
| 0x000000CE | DRIVER\_UNLOADED\_WITHOUT\_CANCELLING\_PENDING\_OPERATIONS    | 这表示驱动程序未能在卸载前取消挂起的操作                     |
| 0x000000CF | TERMINAL\_SERVER\_DRIVER\_MADE\_INCORRECT\_MEMORY\_REFERENCE   | 这表示驱动程序被错误地移植到终端服务器                       |
| 0x000000D0 | DRIVER\_CORRUPTED\_MMPOOL                                  | 这表示系统试图访问进程 IRQL 过高的无效内存                   |
| 0x000000D1 | DRIVER\_IRQL\_NOT\_LESS\_OR\_EQUAL                            | 这表示内核模式驱动程序在进程 IRQL 过高时试图访问可分页内存   |
| 0x000000D2 | BUGCODE\_ID\_DRIVER                                        | 这表示 NDIS 驱动程序出现问题                                 |
| 0x000000D3 | DRIVER\_PORTION\_MUST\_BE\_NONPAGED                          | 这表示系统试图访问进程 IRQL 过高的可分页内存                 |
| 0x000000D4 | SYSTEM\_SCAN\_AT\_RAISED\_IRQL\_CAUGHT\_IMPROPER\_DRIVER\_UNLOAD | 这表示驱动程序在卸载之前未取消挂起的操作                     |
| 0x000000D5 | DRIVER\_PAGE\_FAULT\_IN\_FREED\_SPECIAL\_POOL                  | 这表示驱动程序引用了先前释放的内存                           |
| 0x000000D6 | DRIVER\_PAGE\_FAULT\_BEYOND\_END\_OF\_ALLOCATION               | 这表示驱动程序访问的内存超出了其池分配的上限                 |
| 0x000000D7 | DRIVER\_UNMAPPING\_INVALID\_VIEW                            | 这表示驱动程序正在尝试取消映射未映射的地址                   |
| 0x000000D8 | DRIVER\_USED\_EXCESSIVE\_PTES                               | 这表示没有其他系统页表条目 (PTE)                             |
| 0x000000D9 | LOCKED\_PAGES\_TRACKER\_CORRUPTION                          | 这表示内部锁定的页面跟踪结构已损坏                           |
| 0x000000DA | SYSTEM\_PTE\_MISUSE                                        | 这表示页表项 (PTE) 例程的使用方式不正确                      |
| 0x000000DB | DRIVER\_CORRUPTED\_SYSPTES                                 | 这表示试图在无效的 IRQL 中操作内存，可能是由于系统 PTE 损坏  |
| 0x000000DC | DRIVER\_INVALID\_STACK\_ACCESS                              | 这表示驱动程序访问了位于堆栈线程的堆栈指针下方的堆栈地址     |
| 0x000000DE | POOL\_CORRUPTION\_IN\_FILE\_AREA                             | 这表示驱动程序的池内存已损坏，该内存用于存放指向磁盘的页面   |
| 0x000000DF | IMPERSONATING\_WORKER\_THREAD                              | 这表示工作项在完成之前没有禁用模拟                           |
| 0x000000E0 | ACPI\_BIOS\_FATAL\_ERROR                                    | 这表示某个计算机组件出现故障                                 |
| 0x000000E1 | WORKER\_THREAD\_RETURNED\_AT\_BAD\_IRQL                       | 这表示用户有意从内核调试器或键盘启动崩溃转储                 |
| 0x000000E2 | MANUALLY\_INITIATED\_CRASH                                 | 手动发起的崩溃                                             |
| 0x000000E3 | RESOURCE\_NOT\_OWNED                                       | 这表示线程试图释放它不拥有的资源                             |
| 0x000000E4 | WORKER\_INVALID                                           | 这表示不应包含执行工作项的内存中确实包含这样的项，或者当前活动的工作项已排队 |
| 0x000000E6 | DRIVER\_VERIFIER\_DMA\_VIOLATION                            | 驱动程序验证程序 DMA 验证违规                                |
| 0x000000E7 | INVALID\_FLOATING\_POINT\_STATE                             | 这表示线程保存的浮点状态无效                                 |
| 0x000000E8 | INVALID\_CANCEL\_OF\_FILE\_OPEN                              | 这表示向 IoCancelFileOpen 传递了一个无效的文件对象           |
| 0x000000E9 | ACTIVE\_EX\_WORKER\_THREAD\_TERMINATION                      | 这表示活动的执行工作线程正在终止                             |
| 0x000000EA | THREAD\_STUCK\_IN\_DEVICE\_DRIVER                            | 这表示设备驱动程序中的线程在无休止地旋转                     |
| 0x000000EB | DIRTY\_MAPPED\_PAGES\_CONGESTION                            | 这表示没有可用页面来继续操作                                 |
| 0x000000EC | SESSION\_HAS\_VALID\_SPECIAL\_POOL\_ON\_EXIT                   | 表明在会话驱动程序仍保留内存时发生了会话卸载                 |
| 0x000000ED | UNMOUNTABLE\_BOOT\_VOLUME                                  | 这表示 I/O 子系统试图装载启动卷，但失败了                    |
| 0x000000EF | CRITICAL\_PROCESS\_DIED                                    | 关键系统进程已终止                                           |
| 0x000000F0 | STORAGE\_MINIPORT\_ERROR                                   | 它表示存储微型端口驱动程序无法完成 SRB 请求                  |
| 0x000000F1 | SCSI\_VERIFIER\_DETECTED\_VIOLATION                         | 驱动程序验证程序 SCSI 验证违规                               |
| 0x000000F2 | HARDWARE\_INTERRUPT\_STORM                                 | 这表示内核检测到了中断风暴                                   |
| 0x000000F3 | DISORDERLY\_SHUTDOWN                                      | 这表明 Windows 由于内存不足而无法关闭                        |
| 0x000000F4 | CRITICAL\_OBJECT\_TERMINATION                              | 这表示对系统操作至关重要的进程或线程意外退出或已终止         |
| 0x000000F5 | FLTMGR\_FILE\_SYSTEM                                       | 这表示筛选器管理器中发生了不可恢复的失败                     |
| 0x000000F6 | PCI\_VERIFIER\_DETECTED\_VIOLATION                          | 这表示 BIOS 或 PCI 驱动程序正在验证的其他设备中发生错误      |
| 0x000000F7 | DRIVER\_OVERRAN\_STACK\_BUFFER                              | 这表示驱动程序已溢出基于堆栈的缓冲区                         |
| 0x000000F8 | RAMDISK\_BOOT\_INITIALIZATION\_FAILED                       | 这表示在尝试从 RAM 磁盘启动时发生初始化故障                  |
| 0x000000F9 | DRIVER\_RETURNED\_STATUS\_REPARSE\_FOR\_VOLUME\_OPEN           | 这表示驱动程序针对 IRP\_MJ\_CREATE 请求返回了 STATUS\_REPARSE，但没有尾随名称 |
| 0x000000FA | HTTP\_DRIVER\_CORRUPTED                                    | 这表示 HTTP 内核驱动程序 (Http.sys) 已达到损坏状态且无法恢复 |
| 0x000000FC | ATTEMPTED\_EXECUTE\_OF\_NOEXECUTE\_MEMORY                    | 这表示试图执行不可执行的内存                                 |
| 0x000000FD | DIRTY\_NOWRITE\_PAGES\_CONGESTION                           | 这表示没有可用的页面来继续基本的系统操作                     |
| 0x000000FE | BUGCODE\_USB\_DRIVER                                       | 这表示通用串行总线 (USB) 驱动程序中发生了错误                |
| 0x000000FF | RESERVE\_QUEUE\_OVERFLOW                                   | 这表示试图将新项目插入保留队列，导致队列溢出                 |
| 0x00000100 | LOADER\_BLOCK\_MISMATCH                                    | 这表明加载程序块无效，或者它与正在加载的系统不匹配           |
| 0x00000101 | CLOCK\_WATCHDOG\_TIMEOUT                                   | 在多处理器系统中，辅助处理器上的预期时钟中断未在分配的时间间隔内收到 |
| 0x00000102 | DPC\_WATCHDOG\_TIMEOUT                                     | 这表示未在分配的时间间隔内执行 DPC 监视器例程                |
| 0x00000103 | MUP\_FILE\_SYSTEM                                          | 多个 UNC 提供程序 (MUP) 遇到无效或意外的数据                 |
| 0x00000104 | AGP\_INVALID\_ACCESS                                       | 这表示 GPU 写入了以前未提交的一系列加速图形端口 (AGP) 内存   |
| 0x00000105 | AGP\_GART\_CORRUPTION                                      | 这表示图形孔径定向表 (GART) 已损坏                           |
| 0x00000106 | AGP\_ILLEGALLY\_REPROGRAMMED                               | 这表示加速图形端口 (AGP) 硬件已由未经授权的代理重新编程      |
| 0x00000108 | THIRD\_PARTY\_FILE\_SYSTEM\_FAILURE                          | 这表示第三方文件系统或文件系统过滤器中出现了不可恢复的问题   |
| 0x00000109 | CRITICAL\_STRUCTURE\_CORRUPTION                            | 这表示内核检测到关键内核代码或数据损坏                       |
| 0x0000010A | APP\_TAGGING\_INITIALIZATION\_FAILED                        | 应用程序标记初始化失败                                       |
| 0x0000010C | FSRTL\_EXTRA\_CREATE\_PARAMETER\_VIOLATION                   | 这表示在文件系统运行时库 (FsRtl) 额外创建参数 (ECP) 包中检测到冲突 |
| 0x0000010D | WDF\_VIOLATION                                            | 这表示内核模式驱动程序框架 (KMDF) 检测到 Windows 在基于框架的驱动程序中发现了错误 |
| 0x0000010E | VIDEO\_MEMORY\_MANAGEMENT\_INTERNAL                         | 这表示视频内存管理器遇到了无法从中恢复的条件                 |
| 0x0000010F | RESOURCE\_MANAGER\_EXCEPTION\_NOT\_HANDLED                   | 这表示内核事务管理器检测到内核模式资源管理器在响应直接回调时引发了异常。 资源管理器处于意外且不可恢复的状态 |
| 0x00000111 | RECURSIVE\_NMI                                            | 不可屏蔽中断处理过程中发生递归                               |
| 0x00000112 | MSRPC\_STATE\_VIOLATION                                    | 这表示 Msrpc.sys 驱动程序已启动 Bug 检查                     |
| 0x00000113 | VIDEO\_DXGKRNL\_FATAL\_ERROR                                | 这表明 Microsoft DirectX 图形内核子系统检测到违规            |
| 0x00000114 | VIDEO\_SHADOW\_DRIVER\_FATAL\_ERROR                          | 这表示影子驱动程序检测到违规                                 |
| 0x00000115 | AGP\_INTERNAL                                             | 这表示加速图形端口 (AGP) 驱动程序检测到违规                  |
| 0x00000116 | VIDEO\_TDR\_FAILURE                                        | 重置显示驱动程序并从超时恢复的尝试失败                       |
| 0x00000117 | VIDEO\_TDR\_TIMEOUT\_DETECTED                               | 这表示显示驱动程序未能及时响应                               |
| 0x00000119 | VIDEO\_SCHEDULER\_INTERNAL\_ERROR                           | 视频计划程序检测到严重冲突                                   |
| 0x0000011A | EM\_INITIALIZATION\_FAILURE                                | 执行管理器初始化失败                                        |
| 0x0000011B | DRIVER\_RETURNED\_HOLDING\_CANCEL\_LOCK                      | 驱动程序已从持有全局取消锁的取消例程返回                     |
| 0x0000011C | ATTEMPTED\_WRITE\_TO\_CM\_PROTECTED\_STORAGE                  | 尝试写入配置管理器的只读保护存储                             |
| 0x0000011D | EVENT\_TRACING\_FATAL\_ERROR                                | 事件跟踪子系统遇到意外的致命错误                             |
| 0x0000011E | TOO\_MANY\_RECURSIVE\_FAULTS                                | 这表示文件系统在资源不足的情况下导致过多的递归错误而无法处理 |
| 0x0000011F | INVALID\_DRIVER\_HANDLE                                    | 这表示在插入驱动程序对象和引用句柄之间，有人关闭了驱动程序的初始句柄 |
| 0x00000120 | BITLOCKER\_FATAL\_ERROR                                    | 这表明 BitLocker 驱动器加密遇到无法恢复的问题                |
| 0x00000121 | DRIVER\_VIOLATION                                         | 驱动程序导致了违规                                           |
| 0x00000122 | WHEA\_INTERNAL\_ERROR                                      | Windows 硬件错误体系结构 (WHEA) 中发生了内部错误             |
| 0x00000123 | CRYPTO\_SELF\_TEST\_FAILURE                                 | 这表示加密子系统在启动期间未能通过强制算法自测试             |
| 0x00000124 | WHEA\_UNCORRECTABLE\_ERROR                                 | 表明发生了致命的硬件错误                                     |
| 0x00000125 | NMR\_INVALID\_STATE                                        | 这表示 NMR（网络模块注册器）检测到无效状态                   |
| 0x00000126 | NETIO\_INVALID\_POOL\_CALLER                                | 这表示对 netio 托管内存池（例如 FSB 和 MDL）发出了无效的池请求 |
| 0x00000127 | PAGE\_NOT\_ZERO                                            | 应该填充零的页面没有填充                                     |
| 0x00000128 | WORKER\_THREAD\_RETURNED\_WITH\_BAD\_IO\_PRIORITY              | 工作线程返回了错误的 I/O 优先级                              |
| 0x00000129 | WORKER\_THREAD\_RETURNED\_WITH\_BAD\_PAGING\_IO\_PRIORITY       | 工作线程返回了错误的分页 I/O 优先级                         |
| 0x0000012A | MUI\_NO\_VALID\_SYSTEM\_LANGUAGE                             | 这表明 Windows 未找到系统默认 UI 语言的任何已安装的许可语言包 |
| 0x0000012B | FAULTY\_HARDWARE\_CORRUPTED\_PAGE                           | Windows 内存管理器检测到损坏                                 |
| 0x0000012C | EXFAT\_FILE\_SYSTEM                                        | 扩展文件分配表 (exFAT) 文件系统中出现了问题                  |
| 0x0000012D | VOLSNAP\_OVERLAPPED\_TABLE\_ACCESS                          | 卷影复制重叠表访问                                           |
| 0x0000012E | INVALID\_MDL\_RANGE                                        | 无效的 MDL 范围                                             |
| 0x0000012F | VHD\_BOOT\_INITIALIZATION\_FAILED                           | 这表示尝试从 VHD 启动时出现初始化失败                        |
| 0x00000130 | DYNAMIC\_ADD\_PROCESSOR\_MISMATCH                           | 添加到系统的新处理器与当前配置不兼容                         |
| 0x00000131 | INVALID\_EXTENDED\_PROCESSOR\_STATE                         | 这表示保存或还原扩展处理器状态时检测到参数组合无效           |
| 0x00000132 | RESOURCE\_OWNER\_POINTER\_INVALID                           | 这表示提供了无效的资源所有者指针                             |
| 0x00000133 | DPC\_WATCHDOG\_VIOLATION                                   | DPC 看门狗超时违规                                         |
| 0x00000134 | DRIVE\_EXTENDER                                           | 这表示驱动器扩展程序组件经历了严重的内部错误                 |
| 0x00000135 | REGISTRY\_FILTER\_DRIVER\_EXCEPTION                         | 是由注册表筛选驱动程序中未经处理的异常引起的                 |
| 0x00000136 | VHD\_BOOT\_HOST\_VOLUME\_NOT\_ENOUGH\_SPACE                    | 这表示尝试从 VHD 启动时出现初始化失败                        |
| 0x00000137 | WIN32K\_HANDLE\_MANAGER                                    | 这表示 win32k/ntuser 句柄管理器检测到致命错误                |
| 0x00000138 | GPIO\_CONTROLLER\_DRIVER\_ERROR                             | GPIO 类扩展驱动程序遇到致命错误                              |
| 0x00000139 | KERNEL\_SECURITY\_CHECK\_FAILURE                            | 内核检测到关键数据结构的损坏                                 |
| 0x0000013A | KERNEL\_MODE\_HEAP\_CORRUPTION                              | 内核模式堆管理器在堆中检测到损坏                             |
| 0x0000013B | PASSIVE\_INTERRUPT\_ERROR                                  | 内核检测到被动级别中断的问题                                 |
| 0x0000013C | INVALID\_IO\_BOOST\_STATE                                   | 这表示线程退出时 I/O 提升状态无效                            |
| 0x0000013D | CRITICAL\_INITIALIZATION\_FAILURE                          | 这表示早期内核初始化失败                                     |
| 0x00000140 | STORAGE\_DEVICE\_ABNORMALITY\_DETECTED                      | 这表示存储驱动程序堆栈遇到响应性冲突、超出阈值或其他响应失败的速率 |
| 0x00000143 | PROCESSOR\_DRIVER\_INTERNAL                                | 这表示处理器电源管理 (PPM) 驱动程序遇到致命错误              |
| 0x00000144 | BUGCODE\_USB3\_DRIVER                                      | USB设备错误                                                  |
| 0x00000145 | SECURE\_BOOT\_VIOLATION                                    | 这表示由于策略无效或所需操作未完成，无法启动安全启动策略强制执行 |
| 0x00000147 | ABNORMAL\_RESET\_DETECTED                                  | 这表示 Windows 进行了异常重置                                |
| 0x00000149 | REFS\_FILE\_SYSTEM                                         | 这表示发生了文件系统错误                                     |
| 0x0000014A | KERNEL\_WMI\_INTERNAL                                      | 这表示内部内核 WMI 子系统遇到致命错误                        |
| 0x0000014B | SOC\_SUBSYSTEM\_FAILURE                                    | 这表示芯片上的系统 (SoC) 子系统遇到不可恢复的错误            |
| 0x0000014C | FATAL\_ABNORMAL\_RESET\_ERROR                               | 这表示发生不可恢复的系统错误或系统已异常重置                 |
| 0x0000014D | EXCEPTION\_SCOPE\_INVALID                                  | 这表示检测到异常调度的内部不一致                             |
| 0x0000014E | SOC\_CRITICAL\_DEVICE\_REMOVED                              | 这表示关键 SOC 设备意外被删除或失败                          |
| 0x0000014F | PDC\_WATCHDOG\_TIMEOUT                                     | 这表示系统组件无法在分配的时间段内做出响应，从而阻止系统退出已连接待机状态 |
| 0x00000150 | TCPIP\_AOAC\_NIC\_ACTIVE\_REFERENCE\_LEAK                     | 这表示在完全清空发送队列时，应释放 NIC 活动引用              |
| 0x00000151 | UNSUPPORTED\_INSTRUCTION\_MODE                             | 这表示已尝试使用不受支持的处理器指令模式执行代码             |
| 0x00000152 | INVALID\_PUSH\_LOCK\_FLAGS                                  | 这表示提供给其中一个推送锁定 API 的标志无效                  |
| 0x00000153 | KERNEL\_LOCK\_ENTRY\_LEAKED\_ON\_THREAD\_TERMINATION           | 这表示线程在释放其所有 AutoBoost 锁定条目之前已终止          |
| 0x00000154 | UNEXPECTED\_STORE\_EXCEPTION                               | 内核内存存储组件捕获了意外的异常                             |
| 0x00000155 | OS\_DATA\_TAMPERING                                        | 操作系统数据篡改                                             |
| 0x00000157 | KERNEL\_THREAD\_PRIORITY\_FLOOR\_VIOLATION                   | 这表示在特定线程的优先级下尝试了非法操作                     |
| 0x00000158 | ILLEGAL\_IOMMU\_PAGE\_FAULT                                 | 这表示 IOMMU 为无效 ASID 传递了页面故障数据包                |
| 0x00000159 | HAL\_ILLEGAL\_IOMMU\_PAGE\_FAULT                             | 这表示 IOMMU 已针对正在释放的 ASID 提供页面故障              |
| 0x0000015A | SDBUS\_INTERNAL\_ERROR                                     | 这表示 SD 附加设备上发生了不可恢复的硬件故障                 |
| 0x0000015B | WORKER\_THREAD\_RETURNED\_WITH\_SYSTEM\_PAGE\_PRIORITY\_ACTIVE  | 这表示工作线程的系统页面优先级被调用的工作例程泄露           |
| 0x00000160 | WIN32K\_ATOMIC\_CHECK\_FAILURE                              | 这表示 Win32k 函数违反了 ATOMICCHECK                         |
| 0x00000162 | KERNEL\_AUTO\_BOOST\_INVALID\_LOCK\_RELEASE                   | 这表示 AutoBoost 跟踪的锁定是由一个不拥有锁定的线程释放的    |
| 0x00000163 | WORKER\_THREAD\_TEST\_CONDITION                             | 这表示内核工作线程的测试引发了故障                           |
| 0x00000164 | WIN32K\_CRITICAL\_FAILURE                                  | 这表示 Win32k 遇到严重故障                                   |
| 0x0000016C | INVALID\_RUNDOWN\_PROTECTION\_FLAGS                         | 这表示提供给其中一个断开保护 API 的标志无效                  |
| 0x0000016D | INVALID\_SLOT\_ALLOCATOR\_FLAGS                             | 这表示提供给其中一个插槽分配器 API 的标志无效                |
| 0x0000016E | ERESOURCE\_INVALID\_RELEASE                                | 这表示提供给 ExReleaseResourceForThreadLite 的目标线程指针无效 |
| 0x00000170 | CLUSTER\_CSV\_CLUSSVC\_DISCONNECT\_WATCHDOG                  | 这表示群集断开连接未向前推进                                 |
| 0x00000171 | CRYPTO\_LIBRARY\_INTERNAL\_ERROR                            | 它指示加密库中出现内部错误                                   |
| 0x00000173 | COREMSGCALL\_INTERNAL\_ERROR                               | 这指示 CoreMessageCall 检测到不可恢复的错误                  |
| 0x00000174 | COREMSG\_INTERNAL\_ERROR                                   | 这指示 CoreMessaging 检测到不可恢复的错误                    |
| 0x00000178 | ELAM\_DRIVER\_DETECTED\_FATAL\_ERROR                         | 这表示 ELAM 驱动程序检测到致命错误                           |
| 0x0000017B | PROFILER\_CONFIGURATION\_ILLEGAL                           | 性能分析器配置非法                                          |
| 0x0000017E | MICROCODE\_REVISION\_MISMATCH                              | 这表示多处理器配置中的一个或多个处理器加载的微代码不一致       |
| 0x00000187 | VIDEO\_DWMINIT\_TIMEOUT\_FALLBACK\_BDD                       | 图形界面初始化超时且降级显示驱动失败                          |
| 0x00000189 | BAD\_OBJECT\_HEADER                                        | 这表示 OBJECT\_HEADER 已损坏                                 |
| 0x0000018B | SECURE\_KERNEL\_ERROR                                      | 这表示安全内核遇到致命错误                                   |
| 0x0000018C | HYPERGUARD\_VIOLATION                                     | 这表示内核检测到关键内核代码或数据已损坏                      |
| 0x0000018D | SECURE\_FAULT\_UNHANDLED                                   | 无法处理安全内核引发的安全故障                                |
| 0x0000018E | KERNEL\_PARTITION\_REFERENCE\_VIOLATION                     | 内核分区引用违规                                              |
| 0x00000191 | PF\_DETECTED\_CORRUPTION                                   | 检测到页面文件损坏                                            |
| 0x00000192 | KERNEL\_AUTO\_BOOST\_LOCK\_ACQUISITION\_WITH\_RAISED\_IRQL      | 在已提升的 IRQL 下获取内核自动提升锁                           |
| 0x00000196 | LOADER\_ROLLBACK\_DETECTED                                 | 这表示 OS 加载程序的版本与操作系统不匹配                       |
| 0x00000197 | WIN32K\_SECURITY\_FAILURE                                  | 这表示在 win32k 中检测到安全故障                              |
| 0x00000199 | KERNEL\_STORAGE\_SLOT\_IN\_USE                               | 这表示无法释放存储插槽，因为有一个对象在使用存储插槽            |
| 0x0000019A | WORKER\_THREAD\_RETURNED\_WHILE\_ATTACHED\_TO\_SILO            | 工作线程在附加到容器时返回                                     |
| 0x0000019B | TTM\_FATAL\_ERROR                                          | 这表示终端拓扑管理器遇到致命错误                               |
| 0x0000019C | WIN32K\_POWER\_WATCHDOG\_TIMEOUT                            | 这表明 Win32k 没有及时打开监视器                              |
| 0x000001A0 | TTM\_WATCHDOG\_TIMEOUT                                     | TTM 看门狗超时                                               |
| 0x000001A2 | WIN32K\_CALLOUT\_WATCHDOG\_BUGCHECK                         | Win32k 回调看门狗错误检查                                     |
| 0x000001AA | EXCEPTION\_ON\_INVALID\_STACK                               | 在无效堆栈上发生异常                                          |
| 0x000001AB | UNWIND\_ON\_INVALID\_STACK                                  | 在无效堆栈上回退                                              |
| 0x000001C6 | FAST\_ERESOURCE\_PRECONDITION\_VIOLATION                    | 快速ERESOURCE前置条件违规                                     |
| 0x000001C7 | STORE\_DATA\_STRUCTURE\_CORRUPTION                          | 存储数据结构损坏                                              |
| 0x000001C8 | MANUALLY\_INITIATED\_POWER\_BUTTON\_HOLD                     | 系统在响应用户强制关机时发生内部错误                           |
| 0x000001CA | SYNTHETIC\_WATCHDOG\_TIMEOUT                               | 虚拟化环境下的看门狗响应超时                                   |
| 0x000001CB | INVALID\_SILO\_DETACH                                      | 无效的服务器容器分离                                           |
| 0x000001CD | INVALID\_CALLBACK\_STACK\_ADDRESS                           | 无效的回调堆栈地址                                            |
| 0x000001CE | INVALID\_KERNEL\_STACK\_ADDRESS                             | 无效的内核堆栈地址                                            |
| 0x000001CF | HARDWARE\_WATCHDOG\_TIMEOUT                                | 硬件看门狗超时                                                |
| 0x000001D0 | CPI\_FIRMWARE\_WATCHDOG\_TIMEOUT                            | CPI固件看门狗超时                                             |
| 0x000001D2 | WORKER\_THREAD\_INVALID\_STATE                              | 工作线程状态无效                                              |
| 0x000001D3 | WFP\_INVALID\_OPERATION                                    | WFP无效操作                                                  |
| 0x000001D5 | DRIVER\_PNP\_WATCHDOG                                      | 这表明驱动程序未能在特定时间内完成 PnP 操作                    |
| 0x000001D6 | WORKER\_THREAD\_RETURNED\_WITH\_NON\_DEFAULT\_WORKLOAD\_CLASS   | 工作线程返回时携带非默认工作负载类别                           |
| 0x000001D7 | EFS\_FATAL\_ERROR                                          | 加密文件系统遇到致命内部错误                                   |
| 0x000001D8 | UCMUCSI\_FAILURE                                          | USB-C端口管理器与UCSI固件通信失败                              |
| 0x000001D9 | HAL\_IOMMU\_INTERNAL\_ERROR                                 | 硬件抽象层IOMMU内部错误                                        |
| 0x000001DA | HAL\_BLOCKED\_PROCESSOR\_INTERNAL\_ERROR                     | 硬件抽象层被阻塞处理器内部错误                                 |
| 0x000001DB | IPI\_WATCHDOG\_TIMEOUT                                     | 处理器间中断看门狗超时                                        |
| 0x000001DC | DMA\_COMMON\_BUFFER\_VECTOR\_ERROR                           | 它表示驱动程序滥用了 DMA 矢量通用缓冲区 API                  |
| 0x000001DD | BUGCODE\_MBBADAPTER\_DRIVER                                | 这表示操作系统遇到了由 MBBCx 管理的网络驱动程序引起的错误    |
| 0x000001DE | BUGCODE\_WIFIADAPTER\_DRIVER                               | 这表示操作系统遇到由 WiFiCx 管理的网络驱动程序导致的错误       |
| 0x000001DF | PROCESSOR\_START\_TIMEOUT                                  | 这表示处理器无法在允许的时间内启动                           |
| 0x000001E4 | VIDEO\_DXGKRNL\_SYSMM\_FATAL\_ERROR                          | 这表明 Microsoft DirectX 图形内核系统内存管理器检测到违规    |
| 0x000001E9 | ILLEGAL\_ATS\_INITIALIZATION                               | 这表明驱动程序试图在已启用共享虚拟内存 (SVM) 的设备上非法启用地址转换服务 (ATS) |
| 0x000001EA | SECURE\_PCI\_CONFIG\_SPACE\_ACCESS\_VIOLATION                 | 检测到对PCI设备安全配置空间的非法访问请求                       |
| 0x000001EB | DAM\_WATCHDOG\_TIMEOUT                                     | 动态内存管理看门狗超时                                         |
| 0x000001ED | HANDLE\_ERROR\_ON\_CRITICAL\_THREAD                          | 在关键线程上检测到无效或损坏的句柄                              |
| 0x000001F1 | KASAN\_ENLIGHTENMENT\_VIOLATION                            | 内核地址消毒器在虚拟化环境中检测到内存访问违规                  |
| 0x000001F2 | KASAN\_ILLEGAL\_ACCESS                                     | 内核地址消毒器检测到非法内存访问                               |
| 0x00000356 | XBOX\_ERACTRL\_CS\_TIMEOUT                                  | XBOX 控制器芯片选择超时                                      |
| 0x00000BFE | BC\_BLUETOOTH\_VERIFIER\_FAULT                              | 这表示驱动程序已导致冲突                                     |
| 0x00000BFF | BC\_BTHMINI\_VERIFIER\_FAULT                                | 这表示蓝牙微型端口可扩展驱动程序验证程序已捕获冲突           |
| 0x00020001 | HYPERVISOR\_ERROR                                         | 这表示虚拟机监控程序遇到致命错误                             |
| 0x1000007E | SYSTEM\_THREAD\_EXCEPTION\_NOT\_HANDLED\_M                    | 这表明系统线程产生了错误处理程序未捕获的异常                 |
| 0x1000007F | UNEXPECTED\_KERNEL\_MODE\_TRAP\_M                            | 这表明 Intel CPU 生成了陷阱，而内核未能捕获此陷阱            |
| 0x1000008E | KERNEL\_MODE\_EXCEPTION\_NOT\_HANDLED\_M                      | 内核模式程序抛出未捕获的异常                                 |
| 0x100000EA | THREAD\_STUCK\_IN\_DEVICE\_DRIVER\_M                          | 设备驱动中发生线程卡滞                                       |
| 0x4000008A | THREAD\_TERMINATE\_HELD\_MUTEX                              | 这表明驱动程序在一个线程上获取了一个 Mutex，而该线程在释放 Mutex 之前就已退出 |
| 0xC0000218 | STATUS\_CANNOT\_LOAD\_REGISTRY\_FILE                         | 这表示无法加载注册表文件                                     |
| 0xC000021A | WINLOGON\_FATAL\_ERROR                                     | 这意味着 Winlogon 进程意外终止                               |
| 0xC0000221 | STATUS\_IMAGE\_CHECKSUM\_MISMATCH                           | 驱动程序或系统 DLL 已损坏                                    |
| 0xDEADDEAD | MANUALLY\_INITIATED\_CRASH1                                | 检测到用户或程序主动触发的系统崩溃转储                        |
